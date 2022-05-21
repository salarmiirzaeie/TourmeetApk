import React, { useRef, useEffect, useState } from 'react';
import { Button, Input, View, NativeBaseProvider, Select, ScrollView, Text, Divider, TextArea, CheckIcon } from 'native-base';
import { Formik } from 'formik';

export const AddForm2 = () => {
    const [wiz, setwiz] = useState(0)
    
    return (
        <NativeBaseProvider>

            <Formik
                initialValues={{ email: '', names: '', pass: '', date: '' }}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View flex={1}>


                        <ScrollView>

                            <View>
                                <View display={wiz == 0 ? "flex" : "none"} bg="white" p={3} flexDirection="column" flex={1} >
                                    <Text mr={2}>دسته بندی</Text>

                                    <Select borderColor="transparent" _selectedItem={{
                                        bg: "teal.600",
                                        endIcon: <CheckIcon size="5" />
                                    }} onValueChange={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        selectedValue={values.email}>
                                        <Select.Item label="UX Research" value="ux" />
                                        <Select.Item label="UX xz" value="xcz" />
                                        <Select.Item label="xx Research" value="xzcc" />
                                        <Select.Item label="UX cxz" value="tftgb" />
                                        <Select.Item label="zxx zcxz" value="vxc" />



                                    </Select>
                                    <Divider />
                                    <Text mt={2} mr={2}>دسته بندی</Text>


                                    <Select borderColor="transparent" onValueChange={handleChange('names')}
                                        onBlur={handleBlur('names')}
                                        selectedValue={values.names}>
                                        <Select.Item label="UX Research" value="ux" />
                                        <Select.Item label="UX xz" value="xcz" />
                                        <Select.Item label="xx Research" value="xzcc" />
                                        <Select.Item label="UX cxz" value="tftgb" />
                                        <Select.Item label="zxx zcxz" value="vxc" />



                                    </Select>
                                    <Divider />
                                    <Text mt={2} mr={2}>دسته بندی</Text>


                                    <Select borderColor="transparent" onValueChange={handleChange('date')}
                                        onBlur={handleBlur('date')}
                                        selectedValue={values.date}>
                                        <Select.Item label="UX Research" value="ux" />
                                        <Select.Item label="UX xz" value="xcz" />
                                        <Select.Item label="xx Research" value="xzcc" />
                                        <Select.Item label="UX cxz" value="tftgb" />
                                        <Select.Item label="zxx zcxz" value="vxc" />



                                    </Select><Divider />
                                    <Text mt={2} mr={2}>دسته بندی</Text>


                                    <Select borderColor="transparent" onValueChange={handleChange('pass')}
                                        onBlur={handleBlur('pass')}
                                        selectedValue={values.pass}>
                                        <Select.Item label="UX Research" value="ux" />
                                        <Select.Item label="UX xz" value="xcz" />
                                        <Select.Item label="xx Research" value="xzcc" />
                                        <Select.Item label="UX cxz" value="tftgb" />
                                        <Select.Item label="zxx zcxz" value="vxc" />



                                    </Select>
                                    <Divider />
                                    <Text mr={2}>دسته بندی</Text>

                                    <Input
                                        // borderTopColor={"transparent"}
                                        borderLeftColor={"transparent"}
                                        // borderRightColor={"transparent"}

                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                        isRequired={true}
                                    />

                                    <Text mr={2}>دسته بندی</Text>

                                    <Input
                                        // borderTopColor={"transparent"}
                                        borderLeftColor={"transparent"}
                                        // borderRightColor={"transparent"}

                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                        isRequired={true}
                                    />
                                    <Text mr={2}>دسته بندی</Text>

                                    <Input
                                        // borderTopColor={"transparent"}
                                        borderLeftColor={"transparent"}
                                        // borderRightColor={"transparent"}

                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                        isRequired={true}
                                    />


                                    <Text mr={2}>دسته بندی</Text>

                                    <Input
                                        // borderTopColor={"transparent"}
                                        borderLeftColor={"transparent"}
                                        // borderRightColor={"transparent"}
                                        isRequired={true}

                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                        isRequired={true}
                                    />

                                    <Text mt={2} mr={2}>دسته بندی</Text>


                                    <TextArea h={105}></TextArea>






                                </View>

                                <View display={wiz == 0 ? "none" : "flex"} bg="white" p={3} flexDirection="column" flex={1} >
                                    <Text mr={2}>دستsssه بندی</Text>


                                    <Text mr={2}>دسته بندی</Text>

                                    <Input
                                        // borderTopColor={"transparent"}
                                        borderLeftColor={"transparent"}
                                        // borderRightColor={"transparent"}

                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                        isRequired={true}
                                    />

                                    <Text mt={2} mr={2}>دسته بندی</Text>


                                    <TextArea h={105}></TextArea>
                                    




                                </View>

                            </View>





                        </ScrollView>
                        <View p={3} justifyContent={"space-between"} flexDirection={"row"}>
                            <Button flex={0.48} display={wiz == 0 ? "flex" : "none"} onPress={() => setwiz(1)} >بعدی</Button>
                            <Button flex={0.48} display={wiz == 0 ? "none" : "flex"} onPress={handleSubmit} >ثبت</Button>

                            <Button flex={0.48} display={wiz == 0 ? "none" : "flex"} onPress={()=>{setwiz(0)}} >قبلی</Button>

                        </View>
                    </View>


                )}


            </Formik>



        </NativeBaseProvider>
    )





}