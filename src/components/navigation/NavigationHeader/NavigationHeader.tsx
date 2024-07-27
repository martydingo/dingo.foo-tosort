"use client";

import Logo from "@/components/navigation/NavigationHeader/Logo/Logo";
import { Header, ResponsiveContext, Anchor, Nav } from "grommet";
import { NavigationButtons } from "./NavigationButtons/NavigationButtons";


export function NavigationHeader() {

    return (
        <div>
            <Header pad="small" height="xsmall">
                <Anchor

                    href="/"
                    icon={<Logo />}
                    label="dingo.foo"
                    color={"brand"}
                    size={"xlarge"}
                    variant={"subtle"}
                    // weight={"thin"}
                    gap={"small"}
                />
                <ResponsiveContext.Consumer>
                    {(size) =>
                        size === 'small' ? (
                            <div>Testing</div>
                        ) : (
                            <div>
                                <NavigationButtons />
                            </div>
                        )
                    }
                </ResponsiveContext.Consumer>
            </Header>
        </div>
    )
}