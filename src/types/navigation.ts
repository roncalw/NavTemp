import type { RouteProp } from "@react-navigation/native"

export type MainStackParamList = {
    Home: undefined,
    Details: {title: string}
    AppSettings: undefined
}

export type DertailsScreemRouteProp = RouteProp<MainStackParamList, 'Details'>;