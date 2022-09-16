/**
 * The program shows how to get input
 *   and deal with numbers.
 *
 * By:      Seti Ngabo
 * Version: 1.0
 * Since:   2022-09-16
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()
const logString = prompt('How long are the logs(m) : ')

const logamount = parseFloat(logString)

const answer = 1100 / (20 * logamount)

console.log(`${answer} is the maximum amount of ${logamount}m logs.`)
console.log('\nDone.')
