import { createClient } from '@supabase/supabase-js'
import {clientConfig} from "../../configs/app-config";

const {supabase: {url, anonKey}} = clientConfig
const supabase = createClient(url, anonKey)

export default supabase
