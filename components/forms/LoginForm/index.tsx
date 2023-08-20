import React from 'react'
import { Form, Formik, FormikHelpers } from 'formik'
import { SubHeaderText, CaptionText } from '../../texts';
import * as Yup from "yup";
import { Button, FormInput } from "..";
import { VDirect, VEyeCloseIcon , VLockIcon } from '../../icons';
import { loginEmailSchema } from '../../../schemas';
import Link from 'next/link';

interface IProps {
  onSubmit: ((values: { 
    email: string; 
  }) => void
  )
}

export const LoginForm = ({ onSubmit }: IProps) => {
  return (
    <div className="w-full rounded-lg p-5 bg-[rgba(255,255,255,0.25)]">
        <div className="w-full rounded-lg p-5 bg-white">
          <SubHeaderText text="Login to your account" />
          <CaptionText text="Welcome to our service. We're thrilled that you're interested in using our service" />
          <Formik
            initialValues={
                { email: "" }
            }
            validationSchema={loginEmailSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form>
                <FormInput
                  LeftIcon={<VDirect />}
                  type="email"
                  name="email"
                  placeholder="Enter Email Address"
                />
                <Button
                  disabled={!props.dirty || !props.isValid}
                  type="submit"
                >
                  {"VERIFY EMAIL ADDRESS"}
                </Button>
                <div className='w-full bg-gray-200 rounded'>
                  <div className='flex flex-col justify-items-center items-center m-10'>
                    <div className='m-2'>
                      <CaptionText text="Having problems logging in?"/>
                    </div>
                    <Link href={'/login'} className='text-sm text-blue-500 hover:underline m-2'>
                      Chat with us
                    </Link>
                  </div>
                </div>
                <div className='flex flex-row justify-center my-5'>
                          <CaptionText text="(C) 2023. All Rights Reserved."/>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
  );
}