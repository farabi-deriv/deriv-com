import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { SectionContainer, Flex, FlexGridContainer } from 'components/containers'
import { Card, Header, NavCard, CardLink } from 'components/elements'
import { localize, LocalizedLink } from 'components/localization'
import device from 'themes/device'
// icons
import DTrader from 'images/svg/dtrader-icon.svg'
import DMT5 from 'images/svg/dmt5-icon.svg'
import DBot from 'images/svg/dbot-icon.svg'
import Smarttrader from 'images/svg/smarttrader.svg'
import Forex from 'images/svg/market-forex.svg'
import Commodities from 'images/svg/market-commodities.svg'
import StockIndices from 'images/svg/market-stock-indices.svg'
import SyntheticIndices from 'images/svg/market-synthetic-indices.svg'

const HeaderWrapper = styled.div`
    margin-bottom: 4rem;
`

const StyledDbot = styled(DBot)`
    width: 72px;
    height: 72px;
`

const StyledDmt5 = styled(DMT5)`
    width: 72px;
    height: 72px;
`

const StyledDTrader = styled(DTrader)`
    width: 72px;
    height: 72px;
`

const StyledSmarttrader = styled(Smarttrader)`
    width: 72px;
    height: 72px;
`

const StyledHeader = styled(Header)`
    @media ${device.tabletS} {
        font-size: var(--text-size-header-1);
    }
`

const StyledLink = styled(LocalizedLink)`
    text-decoration: none;

    @media ${device.tabletL} {
        margin: 1rem 0;
    }
`

const StyledSubHeader = styled(Header)`
    margin: 0.8rem auto;
    max-width: ${props => props.maxWidth || ''};
`
const StyledFlexGridContainer = styled(FlexGridContainer)`
    @media ${device.tabletL} {
        width: 100%;

        a {
            width: 100%;
            max-width: 50rem;
        }
    }
`

export const TraderCard = ({ is_selected, word_break_cover }) => (
    <StyledLink to="/dtrader">
        <Card
            cover_background="var(--color-red)"
            cover_content={localize('Discover DTrader now')}
            title={localize('DTrader')}
            Icon={StyledDTrader}
            content={[
                localize('A whole new trading experience on a powerful yet easy to use platform.'),
            ]}
            is_inline_icon
            min_height="11.6rem"
            is_selected={is_selected}
            width="100%"
            word_break_cover={word_break_cover}
        />
    </StyledLink>
)
const cardProptypes = {
    is_selected: PropTypes.bool,
    word_break_cover: PropTypes.bool,
}
TraderCard.propTypes = { ...cardProptypes }

export const BotCard = ({ is_selected, word_break_cover }) => (
    <StyledLink to="/dbot">
        <Card
            cover_background="var(--color-orange)"
            cover_content={localize('Discover DBot now')}
            title={localize('DBot')}
            Icon={StyledDbot}
            content={[localize('Automated trading at your fingertips. No coding needed.')]}
            is_inline_icon
            min_height="11.6rem"
            is_selected={is_selected}
            width="100%"
            word_break_cover={word_break_cover}
        />
    </StyledLink>
)
BotCard.propTypes = { ...cardProptypes }

export const DMT5Card = ({ is_selected, word_break_cover }) => (
    <StyledLink to="/dmt5">
        <Card
            cover_background="var(--color-green)"
            cover_content={localize('Discover DMT5 now')}
            title={localize('DMT5')}
            Icon={StyledDmt5}
            content={[localize('The platform of choice for professionals worldwide.')]}
            is_inline_icon
            min_height="11.6rem"
            is_selected={is_selected}
            width="100%"
            word_break_cover={word_break_cover}
        />
    </StyledLink>
)
DMT5Card.propTypes = { ...cardProptypes }

export const SmarttraderCard = ({ is_selected, word_break_cover }) => (
    <StyledLink to="https://smarttrader.deriv.app" external>
        <Card
            cover_background="var(--color-blue-3)"
            cover_content={localize('Discover SmartTrader now')}
            title={localize('SmartTrader')}
            Icon={StyledSmarttrader}
            content={[
                localize('Trade the world’s markets with our popular user-friendly platform.'),
            ]}
            is_inline_icon
            min_height="11.6rem"
            is_selected={is_selected}
            width="100%"
            word_break_cover={word_break_cover}
        />
    </StyledLink>
)
SmarttraderCard.propTypes = { ...cardProptypes }

export const OtherPlatform = ({ header, subHeader, exclude, is_nav }) => (
    <SectionContainer padding="0">
        {is_nav ? null : (
            <HeaderWrapper>
                <StyledHeader font_size="4.8rem" align="center" lh="5rem">
                    {header ? header : localize('Check out our other platforms')}
                </StyledHeader>
                {subHeader && (
                    <StyledSubHeader as="h4" align="center" weight="500" maxWidth="67.6rem">
                        {localize(
                            'Whether you’re a beginner or a seasoned trader, our trading experience is something you’ll love.',
                        )}
                    </StyledSubHeader>
                )}
            </HeaderWrapper>
        )}
        <StyledFlexGridContainer content_width="38.4rem" gap="1rem" grid="3" justify="center">
            {exclude.toLowerCase() !== 'dtrader' && <TraderCard />}
            {exclude.toLowerCase() !== 'dbot' && <BotCard />}
            {exclude.toLowerCase() !== 'dmt5' && <DMT5Card />}
        </StyledFlexGridContainer>
    </SectionContainer>
)

OtherPlatform.propTypes = {
    exclude: PropTypes.string,
    header: PropTypes.string,
    is_nav: PropTypes.bool,
    subHeader: PropTypes.string,
}

export const NavPlatform = () => (
    <Flex wrap="wrap" jc="flex-start">
        <NavCard
            icon={DTrader}
            content={localize(
                'A whole new trading experience on a powerful yet easy to use platform. ',
            )}
            title={localize('DTrader')}
            style={{ 'margin-right': '5.6rem' }}
            to="/dtrader"
        />

        <NavCard
            icon={DMT5}
            content={localize(
                'A whole new trading experience on a powerful yet easy to use platform. ',
            )}
            title={localize('DMT5')}
            to="/dmt5"
        />
        <NavCard
            icon={DBot}
            content={localize(
                'A whole new trading experience on a powerful yet easy to use platform. ',
            )}
            title={localize('DBot')}
            to="/dbot"
            style={{ 'margin-top': '3.2rem', 'margin-right': '5.6rem' }}
        />
        <NavCard
            icon={Smarttrader}
            content={localize(
                'A whole new trading experience on a powerful yet easy to use platform. ',
            )}
            title={localize('SmartTrader')}
            to="https://smarttrader.deriv.app"
            style={{ 'margin-top': '3.2rem' }}
            external
        />
    </Flex>
)

export const NavMarket = () => (
    <Flex wrap="wrap" jc="flex-start">
        <NavCard
            icon={Forex}
            content={localize(
                'Trade the world’s largest financial market with popular forex pairs.',
            )}
            title={localize('Forex')}
            style={{ 'margin-right': '5.6rem' }}
            to="/markets/#trade"
        />
        <NavCard
            icon={StockIndices}
            content={localize(
                'Predict broader market trends and diversify your risk with stock indices.',
            )}
            title={localize('Stock indices')}
            to="/markets/#stock"
        />
        <NavCard
            icon={Commodities}
            content={localize("Trade natural resources that are central to the world's economy.")}
            title={localize('Commodities')}
            to="/markets/#commodities"
            style={{ 'margin-top': '3.2rem', 'margin-right': '5.6rem' }}
        />
        <NavCard
            icon={SyntheticIndices}
            content={localize('Enjoy synthetic markets that emulate real-world market movements.')}
            title={localize('Synthetic Indices')}
            to="/markets/#synthetic"
            style={{ 'margin-top': '3.2rem' }}
        />
    </Flex>
)

export const NavCompany = () => (
    <Flex wrap="wrap" jc="flex-start">
        <CardLink title={localize('DTrader')} to="/dtrader" />
    </Flex>
)
