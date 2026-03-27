import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export class App extends Component {
  pageSize=3;
  apiKey="";
  state={
    progress: 0
  }

  setProgress=(progress)=>{
    this.setState({progress: progress});
  }

  render() {
    return (
      <>
      <Router>
      <Navbar />
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
      />
      <Routes>
          <Route exact path="/" element={<News pageSize={this.pageSize} apiKey={this.apiKey} setProgress={this.setProgress} key="general" category='general' />}>
          </Route>
          <Route exact path="/sports" element={<News pageSize={this.pageSize} apiKey={this.apiKey} setProgress={this.setProgress} key="sports" category='sports' />}>
          </Route>
          <Route exact path="/technology" element={<News pageSize={this.pageSize} apiKey={this.apiKey} setProgress={this.setProgress} key="technology" category='technology' />}>
          </Route>
          <Route exact path="/science" element={<News pageSize={this.pageSize} apiKey={this.apiKey} setProgress={this.setProgress} key="science" category='science' />}>
          </Route>
          <Route exact path="/entertainment" element={<News pageSize={this.pageSize} apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" category='entertainment' />}>
          </Route>
          <Route exact path="/business" element={<News pageSize={this.pageSize} apiKey={this.apiKey} setProgress={this.setProgress} key="business" category='business' />}>
          </Route>
          <Route exact path="/health" element={<News pageSize={this.pageSize} apiKey={this.apiKey} setProgress={this.setProgress} key="health" category='health' />}>
          </Route>
        </Routes>
      </Router>
      </>
    )
  }
}

export default App
