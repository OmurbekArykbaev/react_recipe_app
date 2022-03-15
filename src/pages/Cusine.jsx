import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { useParams, Link } from "react-router-dom"

const Cusine = () => {
  const [cuisine, setCuisine] = useState([])
  let params = useParams()
  useEffect(() => {
    getCuisine(params.type)
    console.log(cuisine)
  }, [params.type])

  const getCuisine = async (name) => {
    const apiKey = "c4eb035d93344bde98dddd16506b9641"
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${name}`
    )
    const recipes = await data.json()
    console.log(recipes.results)
    setCuisine(recipes.results)
  }
  return (
    <Grid>
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        )
      })}
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`

export default Cusine
