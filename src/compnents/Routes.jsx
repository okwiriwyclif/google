
import React from 'react'
import { Switch,Route ,Redirect } from 'react-router'
import { Results } from './Results'

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/search"></Redirect>
                </Route>

                <Route exact path={['/search','/images','/news','/videos']}>
                    <Results/>
                </Route>
            </Switch>
        </div>
    )
}

