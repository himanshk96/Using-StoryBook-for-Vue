import { styled } from '@egoist/vue-emotion'
 
const Button = styled('label')`
    font-size: 150px;
    font-color:red;
`
export default {
   
    name: 'Checkbox',
    
    props: {
        checkbox: {
          type: Object,
          required: true,
          default: () => ({  state: '', title: '' }),
          validator: checkbox => ['state', 'title'].every(key => key in checkbox),
        },
    },
    
    render: function(h){
        return (
                <div>
                    <input type="checkbox" id="convrrt" value="{checkbox.status}">
                        </input>
                    <label for="convrrt"> Blue whale decided to have shrimp </label>
                </div>
        )
    },
    
    
  };



