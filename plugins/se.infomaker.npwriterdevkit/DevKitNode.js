import {BlockNode} from 'substance'

/**
 * <object id="" type="insertnode">
 *      <data>
 *          <text>this is the text</text>
 *      </data>
 * </object>
 */
class DevKitNode extends BlockNode { }

DevKitNode.define({
    type: 'devkitnode',
    dataType: 'string',
    text: 'string'
})

export default DevKitNode
