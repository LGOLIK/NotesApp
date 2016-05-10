import React from 'react'
import { AppHeaderLayout } from './app_header_layout'
import NotesContainer from '../containers/notes_container'

export const AppLayout = () =>
  <div id="app-container">
    <AppHeaderLayout pageTitle="React and Meteor To Do App"/>
    <div id="main-content" className="container">
      <NotesContainer />
    </div>
  </div>
