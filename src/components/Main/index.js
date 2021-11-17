import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './style'

export function Main() {
    const data = useStaticQuery(graphql`
    query {
        alldata {
            mains {
                cakemain {
                  url
                }
                cakename
                maintitle
                pizzaname
                pizzamain {
                  url
                }
                pudimname
                pudimmain {
                  url
                }
              }
        }
        }
    
`)
    const { maintitle, pizzaname } = data.alldata.mains[0]
    return (
       <div>
           
           
       </div>
    )
}
