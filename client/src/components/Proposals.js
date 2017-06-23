import React from 'react'
import {Input, Row} from 'react-materialize'


class Proposals extends React.Component {

   render(){
      return (
      <div>
         <div className="container">
            <h1 id="timbo"> Proposals!!</h1>

            <Row>
               <Input s={6} label="Filter" />
                <Input s={3} type='select' label="Sort" defaultValue='2' className="select">
                    <option type="checkbox" value='1'>Option 1</option>
                    <option value='2'>Option 2</option>
                    <option value='3'>Option 3</option>
                </Input>
                <button className="btn"> + NeW </button>
            </Row>

         </div>
      </div>
      )
   }

}

export default Proposals
