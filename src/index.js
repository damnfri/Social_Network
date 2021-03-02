import React from 'react';
import './index.css';
import state, {addPost, addText,} from './redux/state';

import {rerenderEntireTree} from "./render";


rerenderEntireTree(state, addPost, addText);
