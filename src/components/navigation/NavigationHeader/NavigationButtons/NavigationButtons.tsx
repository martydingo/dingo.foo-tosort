import { Nav, Anchor, Button } from "grommet";
import styled from 'styled-components'

import { Home } from "@styled-icons/ionicons-sharp"
import { Blog } from "@styled-icons/icomoon"
import { Portfolio } from "@styled-icons/zondicons"
import { Info } from "@styled-icons/entypo"

const HomeNavButton = styled(Home)``
const BlogNavButton = styled(Blog)``
const PortfolioNavButton = styled(Portfolio)``
const InfoNavButton = styled(Info)``

export function NavigationButtons() {
    return (
        <Nav direction="row" flex gap={"1em"}>
            <Button active as={Anchor} hoverIndicator="control" href="/" icon={<HomeNavButton height={"1.3em"} />} />
            <Button as={Anchor} hoverIndicator="control" href="/blog" icon={<BlogNavButton height={"1.3em"} />} />
            <Button as={Anchor} hoverIndicator="control" href="/portfolio" icon={<PortfolioNavButton height={"1.3em"} />} />
            <Button as={Anchor} hoverIndicator="control" href="/about" icon={<InfoNavButton height={"1.3em"} />} />

        </Nav>
    )
}