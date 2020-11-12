import React, { useContext, useState, useEffect } from 'react'
import { Center, Button, VStack, HStack, Input, Heading, FormControl, FormLabel } from '@chakra-ui/core'
import { ethers } from 'ethers'
import { Web3Context } from './hooks/useWeb3'
import {
  Gouvernement_address,
  Gouvernement_abi,
} from './contracts/Gouvernement'

function App() {
  const [web3State, login] = useContext(Web3Context)
  const [gouvernement, setGouvernement] = useState(null)
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [job, setJob] = useState(false)
  const [address, setAddress] = useState()

  const handleOnClickSet = async () => {
    const tx = await gouvernement.Register(name, age, job, address)
  }

  useEffect(() => {
    if (web3State.signer !== null) {
      setGouvernement(
        new ethers.Contract(
          Gouvernement_address,
          Gouvernement_abi,
          web3State.signer
        )
      )
    }
  }, [web3State.signer])

  // web3State.is_web3 ??
  // web3State.is_logged ??
  // web3State.chain_id ??
  // web3Sate.account && provider et signer

  return (

    <VStack>
      <Center>
        <Heading mb={10}>Register</Heading>
      </Center>
      <HStack>
        <FormControl isRequired>
          <HStack>
            <VStack>
              <FormLabel htmlFor="fname">Name</FormLabel>
              <Input value={name}
                onChange={(e) => {
                  setName(e.currentTarget.value)
                }} variant="filled" id="fname" placeholder="Name" />

              <FormLabel htmlFor="fname">Age</FormLabel>
              <Input value={age}
                onChange={(e) => {
                  setAge(e.currentTarget.value)
                }} variant="filled" id="fname" placeholder="Age" />

              <FormLabel as="legend">Job</FormLabel>
              <Input value={job}
                onChange={(e) => {
                  setJob(e.currentTarget.value)
                }} variant="filled" id="fname" placeholder="Age" />

              <FormLabel htmlFor="fname">Adresse</FormLabel>
              <Input value={address}
                onChange={(e) => {
                  setAddress(e.currentTarget.value)
                }} variant="filled" id="fname" placeholder="Adresse Wallet" />

              <Button onClick={handleOnClickSet}>Register</Button>
            </VStack>
          </HStack>
        </FormControl >
      </HStack >
    </VStack >

  )
}

export default App;
