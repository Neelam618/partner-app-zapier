import React from 'react'

function Home() {
    return (
        <div id="home">
            <div className="cta">
                <div className="ctaLeftCol">
                    <h3 className="ctaTitle">Build a Zapier Integration</h3>
                    <p>Zapier’s Free Developer Platform connects your API to the web’s top apps. Learn more in our Quick Start Guide.</p>
                </div>
                <div className="ctaRightCol">
                    <button className="startBtn">Start a Zapier Integration</button>
                    <p>Or start your integration with the CLI</p>
                </div>
            </div>
            <h1>Integrations</h1>
        </div>
    )
}

export default Home
