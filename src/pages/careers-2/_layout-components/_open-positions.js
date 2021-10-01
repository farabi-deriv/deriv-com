import React from 'react'
import styled from 'styled-components'
import { SectionContainer, Container, Flex } from 'components/containers'
import { Header } from 'components/elements'
import { LocalizedLink } from 'components/localization'
import { LinkButton } from 'components/form'
import RightArrow from 'images/svg/career-right-arrow.svg'

const getLink = (id) => {
    return `https://deriv.zohorecruit.com/jobs/Careers/${id}`
}

const PositionLink = styled(LocalizedLink)`
    text-decoration: none;
    width: 100%;
    max-width: 996px;
`

const JobWrapper = styled.div`
    border-bottom: 1px solid #f2f3f4;
    display: grid;
    grid-template-columns: 2fr 5fr auto;
    padding: 24px 35px 24px 18px;
`

const OpenPos = (data) => {
    const hidden = false
    return (
        <SectionContainer>
            <Container fd="column">
                <Header mb="40px" align="center" type="heading-3" as="h3">
                    Open positions
                </Header>
                {!hidden &&
                    data.data.map((data, idx) => {
                        return (
                            <PositionLink key={idx} external to={getLink(data.id)}>
                                <JobWrapper>
                                    <Flex ai="center">
                                        <Header type="subtitle-1" as="h">
                                            {data.title}
                                        </Header>
                                    </Flex>
                                    <Flex ai="center">
                                        <Header
                                            max_width="274px"
                                            align="center"
                                            type="paragraph-1"
                                            as="p"
                                            weight="400"
                                        >
                                            {data.location}
                                        </Header>
                                    </Flex>
                                    <Flex ai="center">
                                        <img src={RightArrow}></img>
                                    </Flex>
                                </JobWrapper>
                            </PositionLink>
                        )
                    })}

                {!hidden && (
                    <LinkButton mt="35px" to="/" secondary>
                        See all
                    </LinkButton>
                )}

                {hidden && (
                    <Header type="subtitle-1" align="center">
                        No open positions available at the moment
                    </Header>
                )}
            </Container>
        </SectionContainer>
    )
}

export default OpenPos
