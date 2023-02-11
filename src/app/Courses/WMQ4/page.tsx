"use client"
import { Heading, Text, Box, Center, Flex, VStack, HStack, Icon, Link, Container } from '@chakra-ui/react'


export default function Home() {
  return (
    <>
      <Container maxW={{lg:"1250px", md:"auto"}} px={{lg:"80px",md:"40px",base:"20px"}}>
      <Heading textAlign={"center"} mt="120px" fontSize={"45px"}>Web 3 and Metaverse Specialization</Heading>
      <Heading mt="20px" textAlign={"center"}>Quarter 4</Heading>
      <Text mt="20px" fontSize={"20px"} fontWeight="640" textAlign={"center"} >W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps</Text>
      <Text mt="10px" textAlign={"center"}>Duration: 13 Weeks</Text>
      <Text mt="10px" fontSize={"20px"} fontWeight="640" textAlign={"center"}>Course Description:</Text>
      <Text mt="10px"  textAlign={"center"}>In this course you will learn how to develop Web 3.0 DApps, create a project, deploy it in production, write smart contracts, unit test them, and create user interfaces for them. We will also learn to develop ERC-20 and NFT tokens, DAOs, Oracles, etc.  Please note that in order to develop Web 3 applications you also need to build on top of Web 2.0 technologies which we have already covered in the previous quarters.</Text>
      <Link href='https://javascript.plainenglish.io/why-you-should-learn-web-2-0-before-getting-into-web-3-0-d251625990db' target={"_blank"}><Text mt="10px" textAlign={"center"}>Why You Should Learn Web 2.0 Before Getting into Web 3.0</Text></Link>
      <Text mt="20px" textAlign={"center"} fontSize={"20px"} fontWeight="640">Course Outline:</Text>
      </Container>
      
      <Center mt="15px">
      <Flex gap={"20px"} direction={{lg:"row", md:"column", base:"column"}} align={{base:"center",lg:"initial"}}>  
      <Box bg="#50E09F" w={{lg:"500px",md:"500px", base:"320px"}} borderRadius={"12px"}>
      <VStack align={"start"} p="20px">
      <Text fontSize={"18px"} fontWeight="640">Blockchain and Metaverse Theory</Text>
      <HStack>
      
      <Link href='https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0 ' target={"_blank"}>The Metaverse: And How It Will Revolutionize Everything by Matthew Ball</Link>  
      </HStack>
      <HStack>
      
      <Link href='https://www.packtpub.com/product/mastering-blockchain-fourth-edition/9781803241067' target={"_blank"}>Mastering Blockchain - Fourth Edition by Imran Bashir</Link>  
      </HStack>  
      </VStack>
      </Box>
      <Box bg="#50E09F" w={{lg:"500px",md:"500px", base:"320px"}} borderRadius={"12px"}>
      <VStack align={"start"} p="20px">
      <Text fontSize={"18px"} fontWeight="640">Smart Contract Development in Solidity</Text>
      <HStack>
      
      <Link href='https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181' target={"_blank"}>Solidity Programming Essentials - Second Edition By Ritesh Modi</Link>  
      </HStack>
      <HStack>
      
      <Link href='https://github.com/panaverse/defi-dapps-solidity-smart-contracts' target={"_blank"}>Solidity Learning Repo</Link>  
      </HStack>
      </VStack>
      </Box>
      </Flex>
      </Center>
      <Center mt="20px">
        <Flex gap="20px" direction={{lg:"row", md:"column", base:"column"}} align={{base:"center",lg:"initial"}}>
            <VStack gap={"12px"}>
                <Box bg="#50E09F" w={{lg:"500px",md:"500px", base:"320px"}} h={{lg:"100px", base:"120px"}} borderRadius={"12px"}>
                    <VStack align={"start"} p="20px">
                        <Text fontSize={"18px"} fontWeight="640">Dapp Development using Ethers.js and Next.js 13</Text>
                        <HStack>
                            
                            <Link href='https://github.com/panaverse/dapps-nextjs' target={"_blank"}>Dapp Learning Repo</Link>
                        </HStack>
                    </VStack>
                </Box>
                <Box bg="#50E09F" w={{lg:"500px",md:"500px", base:"320px"}} borderRadius={"12px"} p="20px">
                    <Text fontSize={"18px"} fontWeight="640">Tokennomics</Text>
                </Box>
                <Box bg="#50E09F" w={{lg:"500px",md:"500px", base:"320px"}} borderRadius={"12px"} mt="12px">
                    <VStack align={"start"} p="20px">
                        <Text fontSize={"18px"} fontWeight="640">Blockchain Project: Create a Token and Launch ICO/IEO/IDO</Text>
                        <Text>As you probably know, the ICO ("Initial Coin Offering") industry has been booming, and it's completely reinventing the way new startups kickstart themselves. In fact, have a look at Wikipedia's list of highest crowdfunding projects and you'll notice that blockchain projects absolutely dominate the list.</Text>
                        <HStack>
                            
                            <Link href='https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects,' target={"_blank"}>List of highest-funded crowdfunding projects</Link>
                        </HStack>
                        <HStack>
                            
                            <Link href='https://phemex.com/blogs/what-is-a-dex-ido' target={"_blank"}>Understand the difference between IDO vs. IEO vs. ICO</Link>
                        </HStack>
                        <Text>Also check these links for latest listings:</Text>
                        <HStack>
                            
                            <Link href='https://icodrops.com' target={"_blank"}>ICO list at ICO Drops</Link>
                        </HStack>
                        <HStack>
                            
                            <Link href='https://topicolist.com/ ' target={"_blank"}>ICO List of Best New Initial Coin Offerings</Link>
                        </HStack>
                        <HStack>
                            
                            <Link href='https://cryptototem.com/ico-list/' target={"_blank"}>Top-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and IDOsTop-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and IDOs </Link>
                        </HStack>
                        <HStack>
                            
                            <Link href='https://www.icolistingonline.com' target={"_blank"}>ICO List Online</Link>
                        </HStack>
                        <HStack>
                            
                            <Link href='https://coincodex.com/ieo-list/binance/' target={"_blank"}>Binance IEO List</Link>
                        </HStack>
                        <HStack>
                            
                            <Link href='https://www.coinspeaker.com/ieo/platform/binance-launchpad/' target={"_blank"}>Binance Launchpad</Link>
                        </HStack>
                        <HStack>
                            
                            <Link href='https://icomarks.com/ieo' target={"_blank"}>IEO List</Link>
                        </HStack>
                        <HStack>
                            
                            <Link href='https://polkastarter.com' target={"_blank"}>Polkastarter</Link>
                        </HStack>
                    </VStack>
                </Box>
            </VStack>
            <VStack mb={{lg:"0px", md:"0px",base:"1px"}} gap={"12px"}>
              <Box bg="#50E09F" w={{lg:"500px",md:"500px", base:"320px"}} borderRadius={"12px"}>
              <VStack align={"start"} p="20px">
                        <Text fontSize={"18px"} fontWeight="640">Project Part 1: How to Launch a IEO on Binance Launchpad</Text>
                        <HStack>
                            
                            <Link href='https://appinventiv.com/blog/how-to-launch-an-ieo/' target={"_blank"}>Read How to Launch an IEO </Link>
                        </HStack>
                        <HStack>
                            
                            <Link href='https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04' target={"_blank"}>Your first task of the project is to make a google slides presentation on how to start a IEO on the Binance Launch Pad</Link>
                        </HStack>
                        <Text>Note: Also document the alternatives to Binance Launchpad.</Text>
                    </VStack>
              </Box>
                <Box bg="#50E09F" w={{lg:"500px",md:"500px", base:"320px"}} borderRadius={"12px"}>
                    <VStack align={"start"} p="20px">
                        <Text fontSize={"18px"} fontWeight="640">Project Part 2: How to Launch a IDO on Polkastarter</Text>
                        <HStack>
                            
                            <Link href='https://cryptorank.io/fundraising-platforms' target={"_blank"}>Review the list of top fundraising platforms</Link>
                        </HStack>
                        <HStack>
                            
                            <Link href='https://polkastarter.com/' target={"_blank"}>Your second task of the project is to make a google slides presentation on how to start a IDO on the Polkastarte</Link>
                        </HStack>
                    </VStack>
                </Box>
                <Box bg="#50E09F" w={{lg:"500px",md:"500px", base:"320px"}} borderRadius={"12px"} h={{lg:"396px",md:"396px",base:"570px"}}>
                    <VStack align={"start"} p="20px">
                        <Text fontSize={"18px"} fontWeight="640">Project Part 3: Create a Pako Token</Text>
                        <Text>By creating a token and related contracts, you'll also learn how to handle money sent to your contracts, which should come in handy if you want to create some kind of paid decentralized service in the future.</Text>
                        <Text>Therefore, let's imagine that our  Pako DApp uses its own coin – the Pako Token. We will create two contracts – one for the token itself and one for the token crowd sale (the ICO).</Text>
                        <Text>Now Create your own Pako ERC20 Token and deploy it on a testnet. The Token should use OpenZeppelin contracts. You will use the Hardhat development environment. Also, write at least twenty automated tests. We will be using Solidity and Typescript for development.</Text>
                    </VStack>
                </Box>
            </VStack>
        </Flex>
    </Center>
    <Center mt="20px">
        <Flex gap="20px" direction={{lg:"row", md:"column", base:"column"}} align={{base:"center",lg:"initial"}}>
            <Box bg="#50E09F" w={{lg:"500px",md:"500px", base:"320px"}} borderRadius={"12px"}>
                <VStack align={"start"} p="20px">
                    <Text fontSize={"18px"} fontWeight="640">Project Part 4: Develop Crowd Sale Contract</Text>
                    <Text>This contract will be responsible for allowing users to exchange ETH for our Pako Token. In order to do that we need to set a price for our token (1 ETH = 100 Pako Token</Text>
                    <Text>Implement a payable buyToken() function.</Text>
                    <Text>Emit a BuyTokens event that will log who’s the buyer, the amount of ETH sent and the amount of Token bought</Text>
                    <Text>Transfer 75% of the Tokens to the Crowd Sale contract at deployment time. i.e. Right after the contract is deployed, we want the token contract to send 75% of our token supply to it. While 25% remain in our personal "owner" account.</Text>
                    <Text>Transfer the ownership of the Crowd Sale contract (at deploy time) to our frontend address so that we are able to withdraw the ETH.</Text>
                    <Text>You can use the openzeppelin crowd sale contracts, however you will have to update the code to the latest solidity version.</Text>
                    <HStack>
                        
                        <Link href='https://docs.openzeppelin.com/contracts/4.x/crowdsales' target="_blank">Crowdsales</Link>
                    </HStack>
                    <Text>Also write extensive tests, for example we will simply send a transaction of 1 ETH from a random account to the contract. After the transaction, we should expect the account to have received Pako, while the contract's balance should have been reduced.</Text>
                    <Text>Note: Before you get started writing the token contract we suggest you review the access control</Text>
                    <HStack>
                        
                        <Link href='https://docs.openzeppelin.com/contracts/4.x/access-control' target="_blank">Access Control</Link>
                    </HStack>
                </VStack>
            </Box>
            <Box bg="#50E09F" w={{lg:"500px",md:"500px", base:"320px"}} borderRadius={"12px"}>
      <VStack align={"start"} p="20px">
      <Text fontSize={"18px"} fontWeight="640">Project Part 5: Trying it with MetaMask</Text>
      <Text>While it's always good to test your code, it's often more satisfying to see the results of your work wrapped in a nice UI. Let's see how we can deploy our contracts and get some Pako tokens into our MetaMask wallet!</Text>
      <Text>We start by running our deployment scripts for the test network so that the new token contracts are uploaded and deployed.</Text>
      <Text>When it's done, take note of what addresses the contracts were uploaded to and copy it!</Text>
      <Text>Now head to MetaMask, and send a transaction of 1 ETH to the crowd sale contract address. If your MetaMask wallet doesn't have any ethers, remember that you can use any faucet.</Text>
      <Text>After the transaction has been confirmed, you might be confused about why you can't see any tokens in your wallet. It turns out that you need to manually add the token address in MetaMask in order to "register" it – after all, there are so many tokens out there, there's no way MetaMask could list them all by default!</Text>
      <Text>To do this, open the side menu and click on the "Add token" button to get started:</Text>
      <Text>Once you're on the token page, click on "Add custom token" and paste in the token contract's address in the address field.</Text>
      <Text>After confirming that you want to add the token, you should be able to see your Pako balance right next to your ETH balance in the wallet. How cool!</Text>
      </VStack>
      </Box>
        </Flex>
    </Center>
    <Center mt="20px">
    <Flex gap="20px" direction={{lg:"row", md:"column", base:"column"}} align={{base:"center",lg:"initial"}}>
    <VStack gap={"12px"}>
    <Box bg="#50E09F" w={{lg:"500px",md:"500px", base:"320px"}} borderRadius={"12px"} h={{lg:"155px",md:"155px" ,base:"180px"}}>
      <VStack align={"start"} p="20px">
      <Text fontSize={"18px"} fontWeight="640">Project Part 6: Trying it with Multisignature Wallets</Text>
      <HStack>
      
      <Link href='https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/' target={"_blank"}>Read </Link>  
      </HStack>
      <HStack>
      
      <Link href='https://gnosis-safe.io/' target={"_blank"}>Now use Gnosis Safe with multi-sigs to do what you did in the last part.</Link>
      </HStack>
      </VStack>
      </Box>
      <Box bg="#50E09F" w={{lg:"500px",md:"500px", base:"320px"}} borderRadius={"12px"} h={{lg:"155px",md:"160px" ,base:"200px"}}>
      <VStack align={"start"} p="20px">
      <Text fontSize={"18px"} fontWeight="640">Project Part 7: Sending Tokens using Ethers.js </Text>
      <Text>Write a Typescript program to send Pako Token to some friend's address using Ethers.js.</Text>
      <HStack>
     
      <Link href='https://ethereum.org/en/developers/tutorials/send-token-etherjs/' target={"_blank"}>You may follow this tutorial</Link>
      </HStack>
      </VStack>
      </Box>
    </VStack>
    <Box bg="#50E09F" w={{lg:"500px",md:"500px", base:"320px"}} borderRadius={"12px"}>
      <VStack align={"start"} p="20px">
      <Text fontSize={"18px"} fontWeight="640">Project Part 8 Advance: Create, Deploy, Mint, and Sell an NFT</Text>
      <HStack>
      
      <Link href='https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/' target={"_blank"}>Read this NFT tutorial series </Link>  
      </HStack>
      <HStack>
     
      <Link href='https://docs.openzeppelin.com/contracts/4.x/erc721' target={"_blank"}>Create a NFT contract using the OpenZepplen ERC721 NFT Standard </Link>
      </HStack>
      <HStack>
     
      <Link href='https://docs.openzeppelin.com/contracts/4.x/erc721#Presets' target={"_blank"}>You may use the Preset ERC721 contract </Link>
      </HStack>
      <HStack>
      
      <Link href='https://opensea.io/' target={"_blank"}>Deploy your NFT contract on a testnet, mint it, and view it on the MetaMask wallet and list it on OpenSea Marketplace for sale</Link>
      </HStack>
      <HStack>
      
      <Link href='https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-market/' target={"_blank"}>Implement a ERC721 Market</Link>
      </HStack>
      </VStack>
      </Box>
    </Flex>
    </Center>
    </>
  )
}