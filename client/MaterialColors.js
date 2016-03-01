/**
 * Created by Justin on 2016-02-29.
 */

// Example:
// class = 'mdl-color--amber-400'

const MaterialColors = [
  'red',
  'pink',
  'purple',
  'deep-purple',
  'indigo',
  'blue',
  'light-blue',
  'cyan',
  'teal',
  'green',
  'light-green',
  'lime',
  'yellow',
  'amber',
  'orange',
  'deep-orange',
  'brown',
  'grey',
  'blue-grey'
]

export function getRandomColor (weight = '500') {
  let colorIndex = Math.floor(Math.random() * (MaterialColors.length + 1))
  return 'mdl-color--' + MaterialColors[colorIndex] + '-' + weight
}
