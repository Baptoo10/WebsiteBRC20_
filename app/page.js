"use client"; // client component

import React, { useState, useRef, useMemo, useEffect, useContext, createContext } from 'react';
import './globals.css';
import { Container, Row, Col } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import Link from "next/link";
import { NextUIProvider } from '@nextui-org/react';
import Chart from 'chart.js/auto';
import Head from 'next/head';

/*
const TokenBalance = {
    availableBalance: '',
    ticker: 'bxbt',
};

const TokenInfo = {
    totalSupply: '100000000',
    totalMinted: '100000000',
}
*/


function TokenInfo() {

    const totalWallets = 172;

    const [walletConnected, setWalletConnected] = useState(false);
    const [address, setAddress] = useState("");
    const [balance, setBalance] = useState({
        confirmed: 0,
        unconfirmed: 0,
        total: 0,
    });
    const [network, setNetwork] = useState("livenet");
    //const [bxbtBalance, setBxbtBalance] = useState('');



   // const state = Object.create(LocationState);
   // state.ticker = 'BXBT';

   /*async function getBXBTbalance() {
        await requestaccount();

        if (walletConnected) {
            try {
                getBasicInfo();
                console.log(balance);
                //await window.unisat.getBalance();
                //if()
            }catch (error) {
                console.error("Erreur lors de la connexion au wallet ", error);
            }
        } else {
            console.error("Veuillez installer Unisat pour interagir avec cette fonction.");
        }
    }*/
/*
    const WalletContext = createContext(null);

    const useWallet = () => {
        const { wallet } = useContext(WalletContext);

        return wallet;
    };

    function TokenBalanceComponent() {
        const [tokenSummary, setTokenSummary] = useState({
            tokenBalance: {
                ticker: 'bxbt',
                UserBalance: ''
            },
            tokenInfo: {
                totalSupply: '',
                totalMinted: ''
            }
        });

        const wallet = useWallet();

        useEffect(() => {
            if (wallet) {
                wallet.tokenSummary(address, 'bxbt').then((tokenSummary) => {
                    setTokenSummary(tokenSummary);
                });
            }
        }, [wallet]);

        const balanceBXBT = useMemo(() => {
            if (!tokenSummary) {
                return '--';
            }
            return tokenSummary?.tokenBalance.UserBalance;
        }, [tokenSummary]);
    }
*/




        const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };
    async function requestaccount() {
        await window.unisat.requestAccounts();
        setWalletConnected(true);

        const [address] = await unisat.getAccounts();
        setAddress(address);

        const balance = await unisat.getBalance();
        setBalance(balance);

        const network = await unisat.getNetwork();
        setNetwork(network);

        console.log("address ", address, "    balance", balance);
    }



    //chart.js
    const chartRef = useRef(null);
   // const canvas = React.useRef()

    useEffect(() => {

        const canvas = chartRef.current;

        if (!canvas) {
            return;
        }

        const ctx = canvas.getContext('2d');
        // const ctx = canvas.current.getContext('2d');

        const startDate = new Date('2023-05-21');
        const endDate = new Date('2023-06-21');
        const timeDiff = endDate.getTime() - startDate.getTime();
        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

        const initialSupply = 100000000;
        const burnAmount = 210000;
        const burnInterval = 2;

        const labels = [];
        const data = [];

        for (let i = 0; i <= daysDiff; i++) {
            const currentDate = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);
            labels.push(currentDate.toLocaleDateString());

            const supply = initialSupply - Math.floor(i / burnInterval) * burnAmount;
            data.push(supply);
        }

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: '$BXBT Supply Previsions',
                    data: data,
                    borderColor: '#3d038c',
                    fill: false
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
        });
    }, []);

    return (
<>
    <Head>
        <title>BXBT Website</title>
        <link rel="shortcut icon" href="../public/bxbtlogo.ico"/>
    </Head>


    <body>
    <title>BXBT Website</title>

        <div style={{  position: 'sticky', top: '0', backgroundColor: '#ffed57', borderBottom: '2px solid #351c75', zIndex: '999' }}>
            <header >
                <nav style={{  display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <ul style={{ display: 'flex', listStyle: 'none', gap: '10px', alignItems: 'center', width: '100%', marginBottom: '0' }}>
                        <li>
                            <div>
                                <h1 style={{ color: '#000000', margin: '0' }}>$BXBT</h1>
                            </div>
                        </li>

                        <li style={{ paddingRight: '2%', paddingLeft: '2%' }}>
                            <Link href="https://bxbtcoreteam.gitbook.io/_bxbt_/informations/overview">
                                <Button size="10%" id="bluebutton">
                                    <span>BXBT Doc</span>
                                </Button>
                            </Link>
                        </li>

                        <li style={{ borderLeft: '2px solid #000000', paddingRight: '2%', paddingLeft: '2%' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Link href="https://discord.gg/Wx9BYwJJ8J">
                                    <Button size="10%" id="bluebutton">
                                        <span>Join the Discord</span>
                                    </Button>
                                </Link>
                            </div>
                        </li>

                        <li style={{ borderLeft: '2px solid #000000', paddingRight: '2%', paddingLeft: '2%'  }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Link href="https://twitter.com/bxbt_brc20">
                                    <Button size="10%" id="bluebutton">
                                        <span>Join the Twitter</span>
                                    </Button>
                                </Link>
                            </div>
                        </li>

                        <li style={{ borderLeft: '2px solid #000000', paddingRight: '2%', paddingLeft: '2%'  }}>
                            <Link href="https://unisat.io/market?tick=bxbt&tab=1">
                                <Button size="10%" id="bluebutton">
                                    <span>Buy $BXBT</span>
                                </Button>
                            </Link>
                        </li>

                        <li style={{ borderLeft: '2px solid #000000', paddingRight: '2%', paddingLeft: '2%'  }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                {walletConnected ? (
                                    <p id="bluebutton">Wallet Connected!</p>

                                ) : (
                                    <Button onPress={requestaccount} size="10%" id="bluebutton">
                                        <span>Connect Wallet</span>
                                    </Button>
                                    )}
                                </div>
                        </li>

                    </ul>
                </nav>
            </header>
        </div>




        <div style={{ display: 'grid', justifyContent: 'center', marginTop: '50px', paddingLeft:'5%', paddingRight:'5%', paddingBottom:'3%' }}>
            <Row justify="center" align="stretch">
                <Col >
                    <div
                        id={"textcolor"} style={{borderRadius: '10px'}}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = '0 0 50px rgba(245, 245, 245, 0.3)';
                            e.currentTarget.style.backgroundColor = '#9fc6ca'
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = '0 0 0 rgba(0, 0, 0, 0.1)';
                            e.currentTarget.style.background = 'linear-gradient(45deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 100%)';
                        }}
                    >
                        <h2>$BXBT : Explore a new burn mechanism</h2>
                    </div>

                    <br/>
                    <br/>
                    <br/>
                    <div
                        id={"textcolor"} style={{borderRadius: '10px'}}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = '0 0 50px rgba(245, 245, 245, 0.3)';
                            e.currentTarget.style.backgroundColor = '#9fc6ca'
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = '0 0 0 rgba(0, 0, 0, 0.1)';
                            e.currentTarget.style.background = 'linear-gradient(45deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 100%)';
                        }}
                    >
                        <p>
                            With $BXBT BRC-20 token, we present a new way to increase the value of your token with an innovative "burn" feature.
                            <br/><br/>
                            This revolutionary feature offers $BXBT token holders the ability to reduce the total token supply by burning a specific amount of tokens.
                            The "burn" process involves irreversibly sending tokens to a special address, known as a "burn address", where they are permanently removed from circulation.
                        </p>
                    </div>

                    <div style={{borderBottom: '2px solid #351c75'}}>

                        {walletConnected ? (
                            <h2 style={{color:"#ffffff"}} id="h2satoshi">You actually have a total of {balance.total} satoshis in your balance !
                                Buy some $BXBT to take part of the first burn project on BRC-20.</h2>

                        ) : (
                            <h2 style={{color:"#ffffff"}} id="h2satoshi">Download the <Link style={{color:'#ffffff'}} href={"https://unisat.io/"}>Unisat wallet</Link> to buy $BXBT</h2>
                        )}

                    </div>

                    <div>
                        <h2 style={{color:"#ffffff"}} id="h2satoshi">About $BXBT</h2>
                        <ul style={{ listStyle: 'none', padding: '0' }}>
                            <li style={{ marginBottom: '10px' }}>
                                <div id={"textcolor"} style={{ border: '1px solid #b72015', borderRadius: '5px', padding: '10px' }}>
                                    Created by real Bitcoiners.
                                </div>
                            </li>
                            <li style={{ marginBottom: '10px' }}>
                                <div id={"textcolor"} style={{ border: '1px solid #b72015', borderRadius: '5px', padding: '10px' }}>
                                    Created by Web3 builders.
                                </div>
                            </li>
                            <li style={{ marginBottom: '10px' }}>
                                <div id={"textcolor"} style={{ border: '1px solid #b72015', borderRadius: '5px', padding: '10px' }}>
                                    Created by blockchain enthusiasts.
                                </div>
                            </li>
                            <li style={{ marginBottom: '10px' }}>
                                <div id={"textcolor"} style={{ border: '1px solid #b72015', borderRadius: '5px', padding: '10px' }}>
                                    Total Holders: {totalWallets}.
                                </div>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col>
                    <div style={{ marginLeft: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img
                            src="/bitcoin_burning_artdeco.png"
                            alt="bitcoin_burning_artdeco"
                            style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: '10px' }}
                        />
                    </div>
                </Col>
            </Row>
        </div>

        <div style={{ background: '#e7e8d2', border: '2px solid #000000', maxWidth:'70%', margin: '0 auto', display: 'flex', justifyContent: 'center'}}>
            <canvas ref={chartRef} />
        </div>


        <footer style={{ padding: '20px', textAlign: 'center' }}>
                <h3 style={{ margin: '0', color:'#000000' }}>BXBT core team - 2023</h3>
        </footer>

    </body>
</>
    );
};

export default TokenInfo;
//#ba936a