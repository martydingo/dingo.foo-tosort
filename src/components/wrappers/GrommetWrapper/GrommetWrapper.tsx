"use client";

import grommetTheme from '@/styles/grommet/grommetTheme'
import { Grommet } from 'grommet'


export default function GrommetWrapper({ ...props }) {
    return (
        <Grommet full themeMode={"dark"} theme={grommetTheme}>
            {props.children}
        </Grommet>
    )
}