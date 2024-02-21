import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App (){

    return(
        <section className='App'>
            <TwitterFollowCard  userName="midudev">
                Miguel Ángel Durán
            </TwitterFollowCard>

            <TwitterFollowCard userName="FabrizioRomano">
                Fabrizio Romano
            </TwitterFollowCard>

        </section>
    )
}