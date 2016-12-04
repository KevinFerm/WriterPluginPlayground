import {Component} from 'substance'
const {api, event,idGenerator} = writer
class DevKitComponent extends Component {

    /**
     * Method called when component is disposed and removed from DOM
     */
    dispose() {
        // Perfect place to remove eventlisteners etc
    }

    /**
     * Constructor
     * @param args
     */
    constructor(...args) {
        super(...args)
    }


    /**
     *
     * @returns {{clickCount: number}}
     */

    /*
    *
    * @returns textContent:string
    */
    getContent() {
        var nodes = api.document.getDocumentNodes()
        var textContent = "";
        nodes.forEach(function (node) {
            if (node.content) {
                textContent += node.content.trim()
            }
        })
        return textContent
    }

    generateAndInsertName(gender) {
        let url = "http://api.namnapi.se/v2/names.json?gender="+gender+"&limit=1"
        api.router.get('/api/proxy/', {url: url})
            .then(response => api.router.checkForOKStatus(response))
            .then(response => response.json())
            .then(json => {
                //console.log(json['names'][0]['firstname'])
                //return json['names'][0]['firstname']
                return this.insertNode(json['names'][0]['firstname'])
            })
    }

    getTextSentiments(text) {
        let url = 'http://api.l4.se/text/v1/tags'
        api.router.get('/api/proxy/', {url: url,
            parts: {text:text},
            headers: {
                'Content-Type': "application/json"
            }
        })
        .then(response => api.router.checkForOKStatus(response))
        .then(response => response.json())
        .then(json => {
            console.log("Response is", json)
        })
        .catch((e) => {
            console.error(e)
        })
    }

    insertNode(text) {

        // Create the node
        var node = {
            id: idGenerator(),
            type: 'devkitnode',
            dataType: 'devkitnode',
            text: text,
        }

        // Insert as a block node via the API

        api.document.insertBlockNode(node.type, node)
    }
    /**
     * Render method is called whenever there's a change in state or props
     * @param $$
     * @returns {*}
     */
    render($$) {
        const el = $$('div').addClass('devkit')

        //let data = this.getContent()
        //let sentiments = this.getTextSentiments(data)
        //console.log(sentiments)

        el.append($$('h2').append(this.getLabel('Devkit plugin loaded')))

        let button = $$('button').addClass('sc-np-btn btn-primary').on('click', () => {
            var name = this.generateAndInsertName('male')
        }).append('Generate Male Name')

        let button2 = $$('button').addClass('sc-np-btn btn-primary').on('click', () => {
            var name = this.generateAndInsertName('female')
        }).append('Generate Female Name')

        el.append(button)
        el.append(button2)

        return el
    }
}
export default DevKitComponent
