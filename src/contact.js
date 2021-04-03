import {codefactory, dropLast} from './codefactory'

export default function contact() {
  dropLast()
  codefactory('h1', {'class': 'title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900' }, 'My Contact', 'content');
}