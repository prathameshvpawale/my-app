
import { Link } from "expo-router"
import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function foryou() {
    return <SafeAreaView>

        <Link href={"/suggested"}>
            <Text>
                suggested
            </Text>
        </Link>
        <Link href={"/liked"}>
            <Text>
                Liked
            </Text>
        </Link>
        <Link href={"/library"}>
            <Text>
                library
            </Text>
        </Link>

    </SafeAreaView>
}
