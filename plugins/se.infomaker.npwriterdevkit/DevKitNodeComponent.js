import {Component, TextPropertyEditor} from 'substance'

class DevKitNodeComponent extends Component {

    /**
     * This component is used to render the "node" inside the editor
     * @param $$
     * @returns {*}
     */
    render($$) {
        const node = this.props.node // You can access the node through the props

        const el = $$('div')

        // Use an TextPropertyEditor to allow us to edit the text

        const textField = $$(TextPropertyEditor, {
            tagName: 'div',
            path: [this.props.node.id, 'text'],
            doc: this.props.doc
        }).ref('text')

        el.append(textField)

        return el
    }

}

export default DevKitNodeComponent
