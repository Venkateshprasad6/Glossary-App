import React from "react";
import { useForm } from "react-hook-form";
import {
  Input,
  Stack,
  FormControl,
  FormLabel,
  Button,
  FormErrorMessage,
  Link,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import CustomBox from "../components/customBox";

import { useDispatch } from "react-redux";
import { addState } from "../features/study/studySlice";

const AddState = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(addState(data));
  };

  return (
    <>
      <CustomBox borderStyle="solid-black" borderWidth="5px">
        <Flex alignItems="center" gap={2}>
          <Link to="">
            <ArrowBackIcon w={6} h={6} />
          </Link>

          <Heading as="h3" size="lg">
            STATE FORM
          </Heading>
        </Flex>
      </CustomBox>

      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomBox>
          <Stack spacing={4}>
            <FormControl isInvalid={errors?.id}>
              <FormLabel> ID </FormLabel>
              <Input
                type="text"
                placeholder="ID"
                {...register("id", { required: "ID Field is Empty" })}
              />
              <FormErrorMessage>
                {errors?.id && errors.id.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors?.state}>
              <FormLabel> State </FormLabel>
              <Input
                type="text"
                placeholder="state"
                {...register("state", { required: "state Field is Empty" })}
              />
              <FormErrorMessage>
                {errors?.state && errors.state.message}
              </FormErrorMessage>
            </FormControl>

            <Button colorScheme="blue" type="submit">
              Submit
            </Button>
          </Stack>
        </CustomBox>
      </form>
    </>
  );
};

export default AddState;
