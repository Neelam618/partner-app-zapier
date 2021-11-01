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
            <table className="table">
                <thead>
                    <tr className="tableHeadingRow">
                        <th className="tableHead name">Name</th>
                        <th className="tableHead version">Version</th>
                        <th className="tableHead status">Status</th>
                        <th className="tableHead settings"></th>
                    </tr>
                </thead>
                <tbody className="tableBody">
                    <tr className="tableBodyRow">
                        <td className="tableData nameValue">
                            <span className="appTitle">
                                <span className="appIconWrapper">
                                    <img className="appIcon" src="https://cdn.zapier.com/zapier/images/frontend/placeholder/128x128.grey.png" alt="" />
                                </span>
                            </span>
                            Dummy App
                        </td>
                        <td className="tableData versionValue">1.0.0</td>
                        <td className="tableData statusValue">Private</td>
                        <td className="tableData settingsValue">
                            <span className="settingsWrapper">
                                <svg viewBox="0 0 512 512"><path d="M329 256c0-20-7-37-21-52-15-14-32-21-52-21s-37 7-52 21c-14 15-21 32-21 52s7 37 21 52c15 14 32 21 52 21s37-7 52-21c14-15 21-32 21-52zm146-31v63c0 3 0 5-2 7-1 2-3 3-6 4l-52 8c-4 10-8 19-12 26 7 9 17 22 31 39 2 2 3 5 3 7 0 3-1 5-3 7-5 7-14 17-28 31-14 13-23 20-27 20-2 0-5-1-7-3l-40-31c-8 5-17 8-26 11-3 26-6 44-8 53-1 6-5 8-10 8h-64c-2 0-5 0-7-2s-3-4-3-6l-8-53c-9-3-18-6-26-10l-40 30c-2 2-4 3-7 3s-5-1-7-3c-24-22-40-38-47-48-2-2-2-4-2-7 0-2 0-4 2-6 3-4 8-11 14-19 7-9 12-16 16-21-5-9-9-19-12-28l-52-8c-3 0-5-1-6-3-2-2-2-4-2-7v-63c0-3 0-5 2-7 1-2 3-3 5-4l53-8c3-8 7-17 12-26-8-11-18-24-31-39-2-3-3-5-3-7s1-4 3-7c5-7 14-17 28-30 14-14 23-21 27-21 2 0 5 1 7 3l40 31c8-5 17-8 26-11 3-26 6-44 8-53 1-6 5-8 10-8h64c2 0 5 0 7 2s3 4 3 6l8 53c9 3 18 6 26 10l40-30c2-2 4-3 7-3s5 1 7 3c25 23 41 39 47 49 2 1 2 3 2 6 0 2 0 4-2 6-3 4-8 11-14 19-7 9-12 16-16 21 5 9 9 18 12 28l52 8c3 0 5 1 6 3 2 2 2 4 2 7z"></path></svg>
                            </span>
                        </td>
                    </tr>
                </tbody>

                <tbody className="tableBody">
                    <tr className="tableBodyRow">
                        <td className="tableData nameValue">
                            <span className="appTitle">
                                <span className="appIconWrapper">
                                    <img className="appIcon" src="https://cdn.zapier.com/zapier/images/frontend/placeholder/128x128.grey.png" alt="" />
                                </span>
                            </span>
                            Dummy App
                        </td>
                        <td className="tableData versionValue">1.0.0</td>
                        <td className="tableData statusValue">Private</td>
                        <td className="tableData settingsValue">
                            <span className="settingsWrapper">
                                <svg viewBox="0 0 512 512"><path d="M329 256c0-20-7-37-21-52-15-14-32-21-52-21s-37 7-52 21c-14 15-21 32-21 52s7 37 21 52c15 14 32 21 52 21s37-7 52-21c14-15 21-32 21-52zm146-31v63c0 3 0 5-2 7-1 2-3 3-6 4l-52 8c-4 10-8 19-12 26 7 9 17 22 31 39 2 2 3 5 3 7 0 3-1 5-3 7-5 7-14 17-28 31-14 13-23 20-27 20-2 0-5-1-7-3l-40-31c-8 5-17 8-26 11-3 26-6 44-8 53-1 6-5 8-10 8h-64c-2 0-5 0-7-2s-3-4-3-6l-8-53c-9-3-18-6-26-10l-40 30c-2 2-4 3-7 3s-5-1-7-3c-24-22-40-38-47-48-2-2-2-4-2-7 0-2 0-4 2-6 3-4 8-11 14-19 7-9 12-16 16-21-5-9-9-19-12-28l-52-8c-3 0-5-1-6-3-2-2-2-4-2-7v-63c0-3 0-5 2-7 1-2 3-3 5-4l53-8c3-8 7-17 12-26-8-11-18-24-31-39-2-3-3-5-3-7s1-4 3-7c5-7 14-17 28-30 14-14 23-21 27-21 2 0 5 1 7 3l40 31c8-5 17-8 26-11 3-26 6-44 8-53 1-6 5-8 10-8h64c2 0 5 0 7 2s3 4 3 6l8 53c9 3 18 6 26 10l40-30c2-2 4-3 7-3s5 1 7 3c25 23 41 39 47 49 2 1 2 3 2 6 0 2 0 4-2 6-3 4-8 11-14 19-7 9-12 16-16 21 5 9 9 18 12 28l52 8c3 0 5 1 6 3 2 2 2 4 2 7z"></path></svg>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="helpInfo">
                <div className="helpTitle">
                    <span className="helpIconWrapper">
                        <svg className="helpIcon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19V17H13V19H11ZM14.17 12.17L15.07 11.25C15.64 10.68 16 9.88 16 9C16 6.79 14.21 5 12 5C9.79 5 8 6.79 8 9H10C10 7.9 10.9 7 12 7C13.1 7 14 7.9 14 9C14 9.55 13.78 10.05 13.41 10.41L12.17 11.67C11.45 12.4 11 13.4 11 14.5V15H13C13 13.5 13.45 12.9 14.17 12.17Z" fill="#666666"></path></svg>
                    </span>
                    Need help?
                </div>
                <p className="helpPara">Tell us about your problem and we’ll connect you with the right resource or contact support.</p>
            </div>
        </div>
    )
}

export default Home
