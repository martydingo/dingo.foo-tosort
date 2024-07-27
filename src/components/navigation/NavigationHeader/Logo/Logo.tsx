'use client';

import { Avatar } from 'grommet';
import logo from './logo.png'

export default function Logo() {
    return (
        <Avatar src={logo.src} size='large' />
    )
}