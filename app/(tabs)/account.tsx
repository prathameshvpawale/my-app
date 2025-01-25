
import { View, Text, Button } from "react-native"
import { Link } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"

export default function account() {
    return <SafeAreaView>
        <Text>
            acount page
        </Text>
        <Link href={"/accountinfo"}>
            <Text>
                account information
            </Text>
        </Link>

        <Button title="open bottom sheet"></Button>
    </SafeAreaView>
}
