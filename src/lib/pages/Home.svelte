<script>
    import {
        Grid,
        Row,
        Column,
        InlineNotification,
        Form,
        TextInput,
        FormLabel,
        Button,
        ImageLoader,
        Tile,
        PasswordInput,
        ClickableTile,
    } from "carbon-components-svelte";
    import Hyperlink from "../components/shared/Hyperlink.svelte";
    import atms from "../../assets/atms.jpg";
    import accounting from "../../assets/accounting.jpg";
    import marinn_clydesdale from "../../assets/marinn_clydesdale.jpg";
    import Avatar from "../components/shared/Avatar.svelte";
    import data_science from "../../assets/data_science.jpg";
</script>

<svelte:head>
    <title>World Order Bank | Home</title>
</svelte:head>

<Grid fullWidth padding>
    <Row>
        <Column>
            <h1>Welcome to World Order Online Banking</h1>
            <p><em> Rule the world with us </em></p>
        </Column>
    </Row>
    <Row>
        <Column>
            <InlineNotification
                width="100%"
                kind="warning"
                hideCloseButton
                title="NOTICE"
                subtitle="The financial community is seeing an aggressive increase in attempts to access member account information through scams and phishing. 2FA is currently highly reccommended."
            />
        </Column>
        <Column>
            <InlineNotification
                width="100%"
                kind="info"
                hideCloseButton
                title="COVID-19"
                subtitle="Due to severe public health concerns, banking locations in Wuhan, Area 51 Nevada, Berlin, New York City, and Green River Colorado are closed temporarily. Our employees at open locations wear masks at all times."
            /></Column
        >
    </Row>
    <Row>
        <Column>
            <Tile>
                <h1>Log in to Online Banking</h1>
                <br />
                <Form>
                    <FormLabel>Username</FormLabel>
                    <TextInput title="Username" />
                    <FormLabel>Password</FormLabel>
                    <PasswordInput title="Password" required />
                    <Button style="margin-top: 5px; margin-bottom: 5px"
                        >Login</Button
                    >
                    <Hyperlink
                        href="/forgot-password"
                        title="Forgot Password?"
                    />
                    <Hyperlink
                        href="/create-account"
                        title="New to World Order Bank? Open Account Today!"
                    />
                </Form>
            </Tile>

            <Row>
                <Column>
                    <ClickableTile>
                        <h4>Instant bill payments</h4>
                        <pictogram name="DistributionLedger" />
                        <p>
                            Use our Hyperdogma&trade; service to transfer money
                            over the wire in seconds.
                        </p>
                        <Hyperlink
                            title="Learn more"
                            href="/instant-bill-payments"
                        />
                    </ClickableTile>
                </Column>
                <Column>
                    <ClickableTile>
                        <h4>Complete security</h4>
                        <pictogram name="InfrastructureSecurity" />
                        <p>
                            Complete at-rest and transactional encryption with
                            latest georeundant ciphers.
                        </p>
                        <Hyperlink
                            title="Learn more"
                            href="/complete-security"
                        />
                    </ClickableTile>
                </Column>
                <Column>
                    <ClickableTile>
                        <h4>Zero-Fee Forex</h4>
                        <pictogram name="GlobalMarketsBar" />
                        <p>
                            Hold, transact, lend, and take out loans in all
                            supported currencies.
                        </p>
                        <Hyperlink title="Learn more" href="/forex" />
                    </ClickableTile>
                </Column>
            </Row>
        </Column>
        <Column>
            <Tile>
                <ImageLoader src={accounting} alt="happy accountants" />
            </Tile>
        </Column>
    </Row>
    <Row>
        <Column>
            <Tile>
                <img src={atms} width="100%" alt="some atms in India" />
            </Tile>
        </Column>
        <Column>
            <Tile>
                <h1>Everybody wants to rule the world</h1>
                <p>And now everybody finally can</p>
            </Tile>
            <Row>
                <Column>
                    <ClickableTile>
                        <h4>Global Banking Network</h4>
                        <pictogram name="IndiaSouthAsia" />
                        <p>
                            Access banking services from any United Nations
                            country, including China, India, Canada, Brazil, and
                            the United States.
                        </p>
                        <Hyperlink
                            title="Learn more"
                            href="/instant-bill-payments"
                        />
                    </ClickableTile>
                </Column>
                <Column>
                    <ClickableTile>
                        <h4>Blockchain Payments</h4>
                        <pictogram name="TransactionalBlockchain" />
                        <p>
                            Zero-Fee stablecoin and traditional cryptocurrency
                            investing. Store NFTs, blockchain apps, and Chinese
                            Digital Yuan.
                        </p>
                        <Hyperlink
                            title="Learn more"
                            href="/complete-security"
                        />
                    </ClickableTile>
                </Column>
                <Column>
                    <ClickableTile>
                        <h4>AI-Guided Investing</h4>
                        <pictogram name="MachineLearning_03" />
                        <p>
                            Advanced Neural Networks create market analysis,
                            investing guides, and mutual funds for you to invest
                            in and maximize revenue.
                        </p>
                        <Hyperlink title="Learn more" href="/forex" />
                    </ClickableTile>
                </Column>
            </Row>
            <Row>
                <Column>
                    <Tile>
                        <Row padding>
                            <Column sm={0.5} padding>
                                <Avatar src={marinn_clydesdale} />
                            </Column>
                            <Column>
                                <p>
                                    <em>
                                        "I've never been skilled at investing.
                                        Now I have a sentient AI to guide my
                                        every move and tell me what to do. I
                                        never have to make any decisions for
                                        myself anymore and I can say with all of
                                        China that I am truly free. It's a
                                        wonderful experience."
                                    </em>
                                </p>
                                <p>
                                    - Marinn Clydesdale, CEO Gargantuan
                                    Analytics, Inc
                                </p>
                                <p>&nbsp; (San Diego, California)</p>
                            </Column>
                        </Row>
                    </Tile>
                </Column>
            </Row>
        </Column>
    </Row>

    <Row>
        <Column>
            <Tile>
                <h1>Fuel your Growth</h1>
                <p>
                    Solutions available for Private Investors, Small Businesses,
                    and Megacorporations alike
                </p>
                <p>
                    Our diverse portfolio of digital and physical assets is sure
                    to shore you up against the coming apocalypse.
                </p>
            </Tile>
            <Row>
                <Column>
                    <ClickableTile>
                        <h4>Financial Strategy</h4>
                        <pictogram name="FinanceStrategy" />
                        <p>
                            Our financial advisers and accountants will help you
                            set up the correct services for a small fee.
                        </p>
                        <Hyperlink
                            title="Learn more"
                            href="/instant-bill-payments"
                        />
                    </ClickableTile>
                </Column>
                <Column>
                    <ClickableTile>
                        <h4>Diverse Assets</h4>
                        <pictogram name="Assets" />
                        <p>
                            Invest in and store Gold, Silver, Fiat Currency,
                            Crypto, NFT, Toilet Paper, Gasoline, Oil, Cattle,
                            and more
                        </p>
                        <Hyperlink
                            title="Learn more"
                            href="/complete-security"
                        />
                    </ClickableTile>
                </Column>
                <Column>
                    <ClickableTile>
                        <h4>Real-Time Analytics</h4>
                        <pictogram name="Vision" />
                        <p>
                            Advanced dashboarding, reporting, and integrations
                            available with enterprise account plan
                        </p>
                        <Hyperlink title="Learn more" href="/forex" />
                    </ClickableTile>
                </Column>
            </Row>
            <Row>
                <Column>
                    <ClickableTile href="create-account">
                        <Row>
                            <Column><h1>Set up account today!</h1></Column>
                            <Column sm={1}><h1><icon name="ArrowRight32" /></h1></Column>
                        </Row>
                    </ClickableTile>
                </Column>
            </Row>
        </Column>
        <Column>
            <Tile><ImageLoader src={data_science} /></Tile>
        </Column>
    </Row>
</Grid>
