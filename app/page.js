"use client"; // client component

import React, { useState, useMemo, useEffect, useContext, createContext } from 'react';
import './globals.css';
import { Container, Row, Col } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import Link from "next/link";
import { NextUIProvider } from '@nextui-org/react';

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

    return (

    <body>
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
                                <Link href="discord.gg/Wx9BYwJJ8J">
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
                                    <p>Wallet Connected!</p>

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




                <div style={{ display: 'grid', justifyContent: 'center', marginTop: '50px', paddingLeft:'5%', paddingRight:'5%' }}>
            <Row justify="center" align="stretch">
                <Col >
                    <div
                        style={{
                            background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 100%)',
                            borderRadius: '10px',
                            padding: '10px',
                            textAlign: 'left',
                            transition: 'box-shadow 0.3s',
                            boxShadow: '0 0 0 rgba(24, 100, 171, 0.1)',
                        }}
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
                        style={{
                            background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 100%)',
                            borderRadius: '10px',
                            padding: '10px',
                            textAlign: 'left',
                            transition: 'box-shadow 0.3s',
                            boxShadow: '0 0 0 rgba(24, 100, 171, 0.1)',
                        }}
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
                            {walletConnected && <p>pp</p>};

                            With $BXBT BRC-20 token, we present a new way to increase the value of your token with an innovative "burn" feature.
                            <br/><br/>
                            This revolutionary feature offers $BXBT token holders the ability to reduce the total token supply by burning a specific amount of tokens.
                            The "burn" process involves irreversibly sending tokens to a special address, known as a "burn address", where they are permanently removed from circulation.
                        </p>
                    </div>

                    <div>

                        {walletConnected ? (
                            <h2 style={{color:"#ffffff"}} id="h2satoshi">You actually have a total of {balance.total} satoshis in your balance !
                                <br/>You should buy some $BXBT to take part of the first burn project on BRC-20</h2>

                        ) : (
                            <h2 style={{color:"#ffffff"}} id="h2satoshi">Connect The Wallet To See The Message ...</h2>
                        )}

                    </div>

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





        <footer style={{ padding: '20px', textAlign: 'center' }}>
                <h3 style={{ margin: '0', color:'#000000' }}>BXBT core team - 2023</h3>
        </footer>

    </body>
     //   </main>
    );
};

export default TokenInfo;
//#ba936a