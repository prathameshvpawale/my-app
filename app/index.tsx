
import { View, Text } from "react-native"
import { Link } from "expo-router"

export default function () {


    return <View>
        <Text>
            <Link href={"/account"}>
                <Text>
                    go to account page
                </Text>
            </Link>
        </Text>
    </View>

}