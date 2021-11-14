import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './style'


export function Header() {
    const data = useStaticQuery(graphql`
    query {
        alldata {
            headers {
                recipes
                headertitle
                subscribe
                background {
                    url
                  }
                about
                rc {
                  url
                }
              }
        }
        }
    
`)
    const { subscribe, about, recipes, background, headertitle } = data.alldata.headers[0]
    return (
        <S.Container back = {background.url}>
            <S.Logo>
                <h1>RC</h1>
            </S.Logo>
            <S.Ul>
                <S.Item>
                    <li>{about}</li> 
                </S.Item>
                <S.Item>
                    <li>{recipes}</li>
                </S.Item>
                <S.Item>
                    <S.Box>
                <p>{subscribe}</p>
                </S.Box>
                    </S.Item>
            </S.Ul>
            <S.Title>
            <h1>{headertitle}</h1>
            </S.Title>        
            
            
        </S.Container>
    )
}
