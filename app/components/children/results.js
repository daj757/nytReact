
import React from 'react'
import Griddle, { plugins, RowDefinition, ColumnDefinition} from 'griddle-react';
import { Icon, Label, Menu, Table, Header } from 'semantic-ui-react'
import {observer} from 'mobx-react'
const mongoose = require("mongoose");
const History = require("../../../models/History");
@observer
export default class ResultsSection extends React.Component {
  onRowClick(row) { 
    console.log(this)
  }

render() {

var component;
const addArticle = ({row}) => (
  <div>
    <button type="button" onClick={this.onRowClick.bind(this)}>Save Article</button>
  </div>);
    if (this.props.docs.length > 1) {
      component = <div> <Header as='h1'>Results</Header><Griddle
    	data={this.props.docs}
    	plugins={[plugins.LocalPlugin]}
      rowMetadata={rowMetadata}
      onRowClick={this.onRowClick.bind(this)}
  ><RowDefinition>
      <ColumnDefinition id="pub_date" title="Date published" />
      <ColumnDefinition id="headline.main" title="Headline" order={1} width={400} />
      <ColumnDefinition id="web_url" title="URL" />
      <ColumnDefinition id="Save Article" customComponent={addArticle}/>
    </RowDefinition>
  </Griddle>
  </div>
    } else {
      component = <span></span>
    }
    return (
      <div>{component}</div>
    )
  }
}