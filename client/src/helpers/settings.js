/* -----------------------------------------------------------------------------------------

    THSI FILE CONTAINS THE IMPORTANT WEB3/UI CONFIGURATIONS FOR THE APP

----------------------------------------------------------------------------------------- */
import React from 'react';
import { FaFighterJet, FaSadTear } from 'react-icons/fa';
import { RiHeart2Fill } from 'react-icons/ri';
import { BiMoviePlay } from 'react-icons/bi';
import { GiMadScientist } from 'react-icons/gi';

export const appSettings = {
    /* APP MAIN LOGO - REPLACE IT FROM THE PUBLIC FOLDER */
    logo: '/favicon4.png',

    /* APP MAIN LOGO WIDTH - CHANGE IT ACCORDING TO YOUR OWN LOGO */
    logoWidth: '140',

    /* APP BRAND NAME - USED IN ALL PAGES & META TAGE - CHANGE TO YOUR OWN BRAND NAME*/
    brandName: 'PortalNext',

    /* APP BRAND DESCRIPTION - USED IN HOME PAGE & META TAGS - PUT A SENTENCE THAT DESCRIBE YOUR APP*/
    brandDescription: 'Next Generation Entertainment',

    /* APP AUTHOR - CHANGE IT IF YOU HAVE A LICENSE KEY OR PURCHASE CODE */
    marketplaceAuthor: 'PortalNext Inc.',

    /* COPYRIGHTS BRAND NAME */
    copyrightsBrand: 'PortalNext Inc.',

    /* TEXT IDENTIFIER FOR THE NETWORK WHERE THE APP IS UP AND RUNNING, YOU CAN WRITE WHATEVER YOU WANT */
    activeNetworkName: 'Ganache Local Server',

    /* COPYRIGHTS LINK - REPLACE IT IF YOU HAVE A LICENSE KEY OR A PURCHASE CODE */
    copyrightsLink: 'https://codecanyon.net/user/web3monkeys',

    /* THE NETWORK RPC URL WHERE YOUR CONTRACTS ARE DEPOLYED ON, CHECK THE EXACT RPC URL FROM HERE https://chainlist.org */
    rpcUrl: 'http://34.125.43.50:8545',

    /* THE CHAIN ID of NETWORK WHERE YOUR CONTRACTS ARE DEPOLYED ON, GET IT FROM HERE https://chainlist.org */
    networkId: 1708805079301,

    /* THE BLOCK SCAN EXPLORER WHRE YOU CAN TRACK THE TRANSACTIONS */
    blockExplorerUrls: 'https://testnet.bscscan.com',

    /* THE CURRENT APP CURRENCY THAT YOUR APP WILL APPEAR BESIDES EVERY PRICE */
    currency: 'ETH',

    /* THE NATIVE CURRENCY THAT YOUR APP WILL USE FOR GAS FEES */
    nativeCurrency: 'ETH',

    /* IPFS PROJECT ID */
    IPFSProjectID: '2Ftp7QxwtNXcz9MbMZNZzM6HJn7',

    /* IPFS PRJECT SECRET KEY */
    IPFSSecret: 'a17663888e792976fb115bff09ec3578',

    /* IPFS DEDICATED GATEWAY NAME */
    IPFSGatewaySubdomain: 'elysium',

    /* ENDPOINT FOR ASK FOR A FEATURE FORM */
    requestFeatureFormId: 'mrgvzdyy',

    /* GENERS LIST - ADD OR DELETE FROM THEM AS YOU NEED */
    genresOptions: [
        { label: 'General', value: 'General', icon: <BiMoviePlay size='3.5rem' className='text-primary' /> },
        { label: 'Adventure', value: 'Adventure', icon: <BiMoviePlay size='3.5rem' className='text-primary' /> },
        { label: 'Animation', value: 'Animation', icon: <BiMoviePlay size='3.5rem' className='text-primary' /> },
        { label: 'Comedy', value: 'Comedy', icon: <BiMoviePlay size='3.5rem' className='text-primary' /> },
        { label: 'Horror', value: 'Horror', icon: <BiMoviePlay size='3.5rem' className='text-primary' /> },
        { label: 'Western', value: 'Western', icon: <BiMoviePlay size='3.5rem' className='text-primary' /> },
        { label: 'War', value: 'War', icon: <BiMoviePlay size='3.5rem' className='text-primary' /> },
        { label: 'Game shows', value: 'Game shows', icon: <BiMoviePlay size='3.5rem' className='text-primary' /> },
        { label: 'Thriller', value: 'Thriller', icon: <BiMoviePlay size='3.5rem' className='text-primary' /> },
        { label: 'Documentary', value: 'Documentary', icon: <BiMoviePlay size='3.5rem' className='text-primary' /> },
        { label: 'Action', value: 'Action', icon: <FaFighterJet size='3.5rem' className='text-primary' /> },
        { label: 'Romance', value: 'Romance', icon: <RiHeart2Fill size='3.5rem' className='text-primary' /> },
        { label: 'Sci-Fi', value: 'Sci-Fi', icon: <GiMadScientist size='3.5rem' className='text-primary' /> },
        { label: 'Drama', value: 'Drama', icon: <FaSadTear size='3.5rem' className='text-primary' /> },
    ],

    /* CHANNEL CATEGORIES LIST - ADD OR DELETE FROM THEM AS YOU NEED */
    channelCategories: [
        {
            label: 'Entertainment',
            value: 'Entertainment',
            icon: <BiMoviePlay size='3.5rem' className='text-primary' />,
        },
        { label: 'Educational', value: 'Educational', icon: <BiMoviePlay size='3.5rem' className='text-primary' /> },
        { label: 'Lifestyle', value: 'Lifestyle', icon: <BiMoviePlay size='3.5rem' className='text-primary' /> },
        { label: 'Gaming', value: 'Gaming', icon: <BiMoviePlay size='3.5rem' className='text-primary' /> },
        { label: 'Sports', value: 'Sports', icon: <BiMoviePlay size='3.5rem' className='text-primary' /> },
        { label: 'Vlogs', value: 'Vlogs', icon: <BiMoviePlay size='3.5rem' className='text-primary' /> },
        { label: 'Business', value: 'Business', icon: <BiMoviePlay size='3.5rem' className='text-primary' /> },
        { label: 'Science', value: 'Science', icon: <BiMoviePlay size='3.5rem' className='text-primary' /> },
        { label: 'Art', value: 'Art', icon: <FaFighterJet size='3.5rem' className='text-primary' /> },
        { label: 'News', value: 'News', icon: <GiMadScientist size='3.5rem' className='text-primary' /> },
    ],
};
