import React from "react"
import Layout from "./layout";

class ProjectLayout extends React.Component {

    render() {
        return (
            <Layout theme={"secondary"}>
                <div>
                    {this.props.children}
                </div>
            </Layout>
        )
    }
}

export default ProjectLayout