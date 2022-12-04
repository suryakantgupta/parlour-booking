import { Box, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
import TabPanel from '../TabPanel/TabPanel';
import styles from './TabsSection.module.scss'

const TabsSection = (props) => {

    const [value, setValue] = useState(props.defaultTab || 0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Box>
                <Tabs
                    variant="scrollable"
                    scrollButtons="auto"
                    style={{
                        minHeight: 'unset'
                    }}
                    classes={{
                        indicator: styles.tab_indicator,
                        flexContainer: styles.fex_container
                    }}
                    value={props.tabValue ? props.tabValue : value}
                    onChange={props.onChange ? props.onChange : handleChange}

                >
                    {props.tabs.map((data) => (
                        <Tab
                            value={data.value}
                            key={data?.label}
                            classes={{
                                root: styles.tabs_root,
                                selected: styles.tab_selected
                            }}
                            label={data?.label}
                            onClick={data?.onClick}
                        />
                    ))}
                </Tabs>
            </Box>

            {props.tabsBody && (
                <div
                    style={{
                        minHeight: 350,
                        padding: '8px',
                        border: '1px solid rgba(0, 0, 0, 0.12)'
                    }}
                >
                    {props.tabsBody.map((data, index) => (
                        <TabPanel value={props.tabValue ? props.tabValue : value} index={index}>
                            {data.component}
                        </TabPanel>
                    ))}
                </div>
            )}
        </div>
    )
}

export default TabsSection