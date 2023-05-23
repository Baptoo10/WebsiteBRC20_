"use client"; // client component

import { useState, useEffect } from 'react';
import './globals.css';
import { Container, Row, Col } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import Link from "next/link";
import { NextUIProvider } from '@nextui-org/react';

const TokenInfo = () => {
    const totalSupply = 1000000;
    const totalBurned = 50000;
    const totalWallets = 1000;
    const holdersDistribution = [
        { address: '0x123...', balance: 500 },
        { address: '0x456...', balance: 200 },
        { address: '0x789...', balance: 300 },
    ];
    const nextBurnDate = '2023-06-01 12:00:00';

    const [walletConnected, setWalletConnected] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };
    async function requestaccount() {
        await window.unisat.requestAccounts();
        setWalletConnected(true);
    }

    return (
      //  <main style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column'}}>
        <body>
        <div style={{ borderBottom: '2px solid #351c75', marginLeft: '5%', marginRight: '5%' }}>
            <header style={{ width: '100%' }}>
                <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 5%' }}>
                    <ul style={{ display: 'flex', listStyle: 'none', gap: '10px', alignItems: 'center', width: '100%', marginBottom: '0' }}>

                        <li>
                            <div>
                                <img style={{ width: '175px' }} src="/BXBTheaderlogo_transparent.png" alt="BXBTheaderlogo" />
                            </div>
                        </li>

                        <li style={{ paddingLeft: '10%' }}>
                            <Link href="https://bxbtcoreteam.gitbook.io/_bxbt_/informations/overview">
                                <Button size="sm" id="bluebutton">
                                    <span>Off BXBT Doc</span>
                                </Button>
                            </Link>
                        </li>

                        <li style={{ borderLeft: '2px solid #000000', paddingLeft: '10%' }}>
                            <Link href="https://unisat.io/market?tick=bxbt&tab=1">
                                <Button size="sm" id="bluebutton">
                                    <span>Buy $BXBT</span>
                                </Button>
                            </Link>
                        </li>

                        <li style={{ borderLeft: '2px solid #000000', paddingLeft: '10%' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                {walletConnected ? (
                                    <p>Wallet Connected!</p>
                                ) : (
                                    <Button onPress={requestaccount} size="sm" id="bluebutton">
                                        <span>Connect Wallet</span>
                                    </Button>
                                )}
                            </div>
                        </li>

                        <li style={{ borderLeft: '2px solid #000000', paddingLeft: '10%' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Link href="https://bxbtcoreteam.gitbook.io/_bxbt_/informations/overview">
                                    <Button size="sm" id="bluebutton">
                                        <span>Join the Discord</span>
                                    </Button>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>


        <div>
                <br />
                <img style={{ display: 'block', margin: '0 auto', maxWidth:'90%', borderRadius: '0.5%'}} src="/bitcoin_fire.png" alt="bitcoin_fire" />

            </div>

            <div>
                <div style={{ display: 'grid', justifyContent: 'center' }}>
                    <Row justify="space-between" align="flex-start" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '5%' }}>
                        <div>
                            <Row justify="center" align="stretch">
                                <Col css={{ marginTop: '$4' }}></Col>
                            </Row>
                        </div>
                    </Row>
                </div>

                <br />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ marginLeft: '5%', alignItems: 'center' }}>
                        <div
                            style={{
                                background: '#ffffff',
                                borderRadius: '10px',
                                boxShadow: '3%',
                                padding: '10px',
                                textAlign: 'left',
                                }}
                        >
                            <h2>$BXBT : Explore a new burn mechanism</h2>
                            <br />
                            <p>
                                With $BXBT BRC-20 token, we present a new way to increase the value of your token with an innovative "burn" feature.
                                <br /><br />
                                This revolutionary feature offers $BXBT token holders the ability to reduce the total token supply by burning a specific amount of tokens.
                                The "burn" process involves irreversibly sending tokens to a special address, known as a "burn address", where they are permanently removed from circulation.
                            </p>
                        </div>


                        <h2>You Have : xxx (info a reprendre du wallet) BXBT / if 0 bxbt = let's go buy some</h2>
                    </div>


                    <div>
                        <Row justify="center" css={{ marginTop: '$4' }}>
                            <Col>
                                <Link href="https://twitter.com/bxbt_brc20">
                                <img style={{ display: 'block', margin: '0 auto', width:'250px' }} src="/burn_video.gif" alt="burn_gif" />
                                </Link>
                            </Col>
                        </Row>
                    </div>
                </div>

            </div>



            <div>
                <div style={{ display: 'grid', justifyContent: 'center' }}>
                    <Row justify="space-between" align="flex-start" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '5%' }}>
                        <div>
                            <Row justify="center" align="stretch">
                                <Col css={{ marginTop: '$4' }}></Col>
                            </Row>
                        </div>
                    </Row>
                </div>

                <br />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{marginLeft:'5%', alignItems: 'center'}}>
                        <h1 style={{ textAlign: 'center' }}>Stats about $BXBT</h1>
                        <br></br>
                        <br></br>
                        <img style={{ display: 'block', margin: '0 auto' }} id="bxbtimage"
                             src="/bxbt_burn_stat.png"
                             alt="BXBT_illustration"
                             onMouseEnter={handleHover}
                             onMouseLeave={handleHover} />
                        {isHovered && (
                            <audio src="/allisgonnaburn.mp3" autoPlay />
                        )}
                    </div>
                    <div>
                        <div>
                            <Row justify="center" css={{ marginTop: '$4' }}>
                                <Col>
                                    <ul style={{ listStyle: 'none', padding: '0' }}>
                                        <li style={{ marginBottom: '10px' }}>
                                            <div style={{ border: '1px solid #b72015', borderRadius: '5px', padding: '10px' }}>
                                                totalSupply: {totalSupply}
                                            </div>
                                        </li>
                                        <li style={{ marginBottom: '10px' }}>
                                            <div style={{ border: '1px solid #b72015', borderRadius: '5px', padding: '10px' }}>
                                                totalBurned: {totalBurned}
                                            </div>
                                        </li>
                                        <li style={{ marginBottom: '10px' }}>
                                            <div style={{ border: '1px solid #b72015', borderRadius: '5px', padding: '10px' }}>
                                                totalWallets: {totalSupply}
                                            </div>
                                        </li>
                                        <li style={{ marginBottom: '10px' }}>
                                            <div style={{ border: '1px solid #b72015', borderRadius: '5px', padding: '10px' }}>
                                                totalSupply: {totalSupply}
                                            </div>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>

                    </div>
                </div>

            </div>

            <footer style={{ padding: '20px', textAlign: 'center' }}>
                <p style={{ margin: '0' }}>Ceci est le contenu du footer</p>
            </footer>

        </body>
     //   </main>

    );
};

export default TokenInfo;
//#ba936a