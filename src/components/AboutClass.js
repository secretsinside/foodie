import React from "react";

class AboutClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            someVar: "SomeValue"
        }
    }


    render() {
        return (
            <div className="about-container">
                About Class Component

                <p>
                    SomeVar: {this.state.someVar}
                </p>
            </div>
        )
    }
}

export default AboutClass;