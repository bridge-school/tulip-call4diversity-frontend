import React, { Component } from "react";

/**
 * Class for App EventsContainer Component
 */
class AppHeader extends Component {

    render() {
        return (
            <section>
                { this.props.children }
            </section>
        );
    }

}

export default EventsContainer;