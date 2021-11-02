import React from 'react'
import Form from "@rjsf/core";

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
    "description" : {
        "ui:widget": "textarea"
    },
}

function CreateIntegration() {
    return (
        <div>
            <h2>Create integration</h2>
            <Form schema={schema} uiSchema={uiSchema}>
                <button>
                    <span>Cancel</span>
                </button>
                <button>
                    <span>Create</span>
                </button>
            </Form>
        </div>
    )
}

export default CreateIntegration
