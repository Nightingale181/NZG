import React, { useEffect, useState } from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Icon from '../../Icon'
import FormSectionLabel from '../../common/labels/FormSectionLabel'
import { useTranslation } from 'react-i18next'
import { useImmer } from 'use-immer'
import ButtonBase from '@material-ui/core/ButtonBase'
import { formatRelative } from 'date-fns'
import { uk } from 'date-fns/locale'

const useStyles = makeStyles(theme => ({
    card: {
        width: '100%',
        height: 403,
        borderRadius: 10,
        boxShadow: '0px 0px 15px rgba(45, 172, 253, .25)',
        '&:hover': {
            boxShadow: '0px 0px 15px rgba(45, 172, 253, .45)'
        }
    },
    background: props => ({
        position: 'relative',
        height: 180,
        background: 'url(/cardBg.png) no-repeat',
        backgroundSize: '100% 100%'
    }),
    avatar: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: 130,
        height: 130,
        margin: 'auto',
        '& .MuiAvatar-img': {
            width: 'initial',
            height: 'initial'
        }
    },
    date: {
        alignSelf: 'flex-end',
        marginBottom: 7,
        marginLeft: 21,
        color: 'white',
        fontSize: '.875rem',
        '&::first-letter': {
            textTransform: 'uppercase'
        }
    },
    vip: {
        display: 'block',
        alignSelf: 'flex-end',
        width: 60,
        justifySelf: 'flex-end'
    },
    like: {
        width: 20
    }
}))
const Card = ({ background, avatar, submission }) => {
    const { type, propertyCategory, location, user, values, price, createdAt } = submission
    const classes = useStyles({ background })
    const theme = useTheme()
    const { t } = useTranslation()
    const [submissionLocation, setSubmissionLocation] = useState('')
    const [submissionType, setSubmissionType] = useState('')

    const [configurations, setConfigurations] = useImmer([])

    useEffect(() => {
        const addConfig = (config) => {
            const { configuration } = config

            if (configuration && configuration.id && configuration.type && configuration.type.name) {
                setConfigurations(draft => {
                    if (draft.findIndex(item => item.id === configuration.id) === -1) {
                        switch (configuration.type.name) {
                            case 'priority':
                            case 'check':
                                draft.push({ id: configuration.id, icon: configuration.icon, value: t(config.valueText) })
                                break
                            case 'select':
                                draft.push({ id: configuration.id, icon: config.icon, value: t(config.valueText) })
                                break
                            case 'range':
                                draft.push({
                                    id: configuration.id,
                                    icon: configuration.icon,
                                    value: `${t('from')} ${config.numberFrom}${configuration.unit || ''} ${t('to')} ${config.numberTo}${configuration.unit || ''}`
                                })
                                break
                            case 'group':
                                draft.push({
                                    id: configuration.id,
                                    value: { tenant: config.tenant, pet: config.pet }
                                })
                                break
                            default:
                                break
                        }
                    }
                })
            }
        }
        if (type && type.length > 0) {
            let subType = t(type.toLowerCase())
            if (propertyCategory && propertyCategory.name) {
                subType += ` ${t(`${propertyCategory.name}_subject`)}`
                setSubmissionType(subType)
            }
        }
        if (location && location.districts && location.districts.length > 0 && location.districts[0]) {
            let locationText = t(location.districts[0].name)
            const length = location.districts.length
            if (length > 1) {
                locationText += `, +${length}`
                setSubmissionLocation(locationText)
            }
        }
        if (values && values.length > 0) {
            if (propertyCategory && propertyCategory.name === 'apartment') { // @TODO check which configurations sould be shown for each property category
                const tenantValue = values.find(item => item.configuration.name === 'tenants')
                const tenantSection = {}
                if (tenantValue && tenantValue.valueText) {
                    tenantSection.tenant = tenantValue
                }

                const petValue = values.find(item => item.configuration.name === 'pets')
                if (petValue && petValue.valueText) {
                    tenantSection.pet = petValue
                }
                addConfig({ configuration: { id: 'group', type: { name: 'group' } }, ...tenantSection })
                const roomValue = values.find(item => item.configuration.name === 'room')
                if (roomValue && roomValue.valueText) {
                    addConfig(roomValue)
                }

                const areaValue = values.find(item => item.configuration.name === 'area')
                if (areaValue && areaValue.numberFrom && areaValue.numberTo) {
                    addConfig(areaValue)
                }
            }
        }
    }, [location, propertyCategory, setConfigurations, submission, t, theme.palette.text.secondary, type, values])

    return (
        <Box className={classes.card}>
            <Box className={classes.background} display={'flex'} flexWrap={'wrap'}>
                <Avatar className={classes.avatar} src={avatar}/>
                <Box display={'flex'} alignSelf={'flex-end'} justifyContent={'space-between'} flexGrow={1}>
                    <Typography className={classes.date} component={'span'}>{formatRelative(new Date(createdAt), new Date(), { locale: uk })}</Typography>
                    {user && user.isVip ? <span className={classes.vip}>
            <Icon type={'vip'}/>
          </span> : null}
                </Box>
            </Box>
            <Box px={2.5}>
                <Box pt={1.8} pb={1}>
                    <FormSectionLabel
                        text={submissionType}
                        fontWeight={theme.typography.fontWeightBold}/>
                </Box>
                <Box>
                    <Box py={0.5}>
                        <FormSectionLabel
                            text={submissionLocation}
                            icon={'locationFilled'} fontSize={'1rem'} color={theme.palette.text.secondary}/>
                    </Box>
                    {
                        configurations.map(item => (
                            <Box py={0.5} key={item.id} display={'flex'} flexWrap={'wrap'}>
                                {item.id === 'group'
                                    ? <Box display={'flex'} flexWrap={'wrap'}>
                                        {item.value.tenant && <FormSectionLabel text={t(item.value.tenant.valueText)} icon={item.value.tenant.icon} fontSize={'1rem'}
                                                                                color={theme.palette.text.secondary}/>}
                                        <Typography color={'textSecondary'} component={'span'} variant={'subtitle1'}>&nbsp;+&nbsp;</Typography>
                                        {item.value.pet && <FormSectionLabel text={t(item.value.pet.valueText)} icon={item.value.pet.icon} fontSize={'1rem'}
                                                                             color={theme.palette.text.secondary}/>}
                                    </Box>
                                    : <FormSectionLabel text={item.value} icon={item.icon} fontSize={'1rem'}
                                                        color={theme.palette.text.secondary}/>
                                }
                            </Box>))
                    }

                    <Box py={0.5} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <FormSectionLabel text={price} icon={'money'} fontSize={theme.typography.body1.fontSize}
                                          fontWeight={theme.typography.fontWeightBold} color={theme.palette.primary.main}/>
                        <ButtonBase className={classes.like}>
                            <Icon type={'like'}/>
                        </ButtonBase>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Card