import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"

const Recipe = () => {
  const params = useParams()
  const [details, setDetails] = useState({})
  const [activeTab, setActiveTab] = useState("instructions")

  const fetchDetails = async () => {
    const apiKey = "c4eb035d93344bde98dddd16506b9641"
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${apiKey}`
    )
    const detailData = await data.json()
    setDetails(detailData)
  }

  useEffect(() => {
    fetchDetails()
    console.log(details)
  }, [params.name])

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instuctions
        </Button>
        <Button
          className={activeTab === "ingridients" ? "active" : ""}
          onClick={() => setActiveTab("ingridients")}
        >
          Ingridients
        </Button>
        {activeTab === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}

        {activeTab === "ingridients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h2 {
    margin-bottom: 2rem;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  ul {
    margin-top: 2rem;
  }
`
const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
`

const Info = styled.div`
  margin-left: 10rem;
`
export default Recipe
