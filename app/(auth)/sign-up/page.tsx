'use client';

import React from 'react'
import {SubmitHandler, useForm} from "react-hook-form";
import {Button} from "@/components/ui/button";
import InputFields from "@/components/forms/InputFields";
import SelectField from "@/components/forms/SelectField";
import {INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS} from "@/lib/constants";
import CountrySelectField from "@/components/forms/CountrySelect";
import FooterLink from "@/components/forms/FooterLink";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm<SignUpFormData>({
        DefaultValues:{
            fullName:'',
            email:'',
            password:'',
            country:'',
            investmentGoals:'Growth',
            riskTolerance:'Medium',
            preferredIndustry:'Technology'
        },
        mode:'onBlur'
    }, );

    const onSubmit = async (data:SignUpFormData) => {
        try{
            console.log(data)
        }catch(e){
            console.error(e);
        }
    }
        return (
        <>
            <h1 className="form-title">SignUp and Personalize</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <InputFields
                    name="fullName"
                    label="Full Name"
                    placeholder="John Doe"
                    register={register}
                    error={errors.fullName}
                    validation={{required:'Full Name is required', minLength:2}}
                />
                <InputFields
                    name="email"
                    label="Email"
                    placeholder="abc@gmail.com"
                    register={register}
                    error={errors.email}
                    validation={{required:'Email is required', pattern: /^\w+@\w+\.\w+$/, message: 'Email address is required'}}
                />
                <InputFields
                    name="password"
                    label="Password"
                    placeholder="Enter a strong password"
                    type="password"
                    register={register}
                    error={errors.password}
                    validation={{ required: 'Password is required', minLength: 8 }}
                />
                <CountrySelectField
                    name="country"
                    label="Country"
                    control={control}
                    error={errors.country}
                    required
                />

                <SelectField
                    name="investmentGoals"
                    label="Investment Goals"
                    placeholder="Select your investment goal"
                    options={INVESTMENT_GOALS}
                    control={control}
                    error={errors.investmentGoals}
                    required
                />
                <SelectField
                    name="riskTolerance"
                    label="Risk Tolerance"
                    placeholder="Select your risk level"
                    options={RISK_TOLERANCE_OPTIONS}
                    control={control}
                    error={errors.riskTolerance}
                    required
                />

                <SelectField
                    name="preferredIndustry"
                    label="Preferred Industry"
                    placeholder="Select your preferred industry"
                    options={PREFERRED_INDUSTRIES}
                    control={control}
                    error={errors.preferredIndustry}
                    required
                />
                <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
                    {isSubmitting ? 'Creating Account' : 'Start Your Investment Journey'}
                </Button>
                <FooterLink text="Already have an account?" linkText="Sign in" href="/sign-in" />
            </form>
        </>
    )
}
export default SignUp
