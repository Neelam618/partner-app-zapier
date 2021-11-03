import React from 'react'
import { withTheme } from '@rjsf/core';
import { Theme as MuiTheme } from 'rjsf-material-ui';
const Form = withTheme(MuiTheme);

const schema = {
    "properties": {
        "name": {
            "title": "Name",
            "type": "string",
            "description": "The name of your app as it should display in Zapier."
        },
        "description": {
            "title": "Description",
            "type": "string",
            "description": "A sentence describing your app in 140 characters or less, e.g. Trello is a team collaboration tool to organize tasks and keep projects on track."
        },
        "homepageUrl": {
            "title": "Homepage URL",
            "type": "string",
            "description": "The homepage URL of your app."
        },
        "logo": {
            "title": "Logo",
            "type": "string",
            "format": "data-url",
            "description": "Upload a square, 256x256px or larger transparent PNG image that does not include the app name. Learn more."
        },
    },
    "required": ["name", "description"]
}

const uiSchema = {
    "description": {
        "ui:widget": "textarea"
    },
}

function CreateIntegration() {
    return (
        <div id="createInt">
            <div className="container">
                <h2>Create integration</h2>
                <Form schema={schema} uiSchema={uiSchema}>
                    <button className="cancelBtn">
                        <span>Cancel</span>
                    </button>
                    <button className="createBtn disabledBtn">
                        <span>Create</span>
                    </button>
                </Form>
            </div>
        </div>
    )
}

export default CreateIntegration
