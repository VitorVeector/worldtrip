import { Flex } from "@chakra-ui/react";
import { Cities } from "../../components/Cities";
import { Content } from "../../components/Content";
import { ContinentBanner } from "../../components/ContinentBanner";
import { Navigation } from "../../components/Navigation";


export default function Continent(){
    return (
        <Flex 
            direction='column'>
            <Navigation/>
            <ContinentBanner/>
            <Content/>
            <Cities/>
        </Flex>
    )
}