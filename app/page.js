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
            <div style={{ borderBottom: '1px solid #ccc', marginBottom: '20px', marginLeft:'5%', marginRight:'5%'}}>
                <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '5%' }}>

                    <div style={{marginLeft:'5%' }}>
                        <img style={{ width: '450px'}} src="/BXBTheaderlogo_transparent.png" alt="BXBTheaderlogo"/>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Link href="https://unisat.io/market?tick=bxbt&tab=1">
                            <Button size="sm" id="yellowbutton">
                                <span>Buy $BXBT</span>
                            </Button>
                        </Link>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Link href="https://bxbtcoreteam.gitbook.io/_bxbt_/informations/overview">
                            <Button size="sm" id="yellowbutton">
                                <span>Off BXBT Doc</span>
                            </Button>
                        </Link>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight:'5%' }}>
                        {walletConnected ? (
                            <p>Wallet Connected!</p>
                        ) : (
                            <Button onPress={requestaccount} size="sm" id="yellowbutton">
                                <span>Connect Wallet</span>
                            </Button>
                        )}
                    </div>
                </header>
            </div>

            <div>
                <br />
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
                        <Row justify="center" css={{ marginTop: '$4' }}>
                            <Col>
                                <ul>
                                    <li>totalSupply: {totalSupply}</li>
                                    <li>totalBurned: {totalBurned}</li>
                                    <li>totalWallets: {totalSupply}</li>
                                    <li>totalSupply: {totalSupply}</li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                </div>

            </div>
        </body>
     //   </main>

    );
};

export default TokenInfo;
