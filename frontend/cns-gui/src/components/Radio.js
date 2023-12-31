export default function Radio(props,checked,onChange,value) {
  return (
    <div class="flex items-center mb-4 ml-10">
      <input
        id="default-radio-1"
        type="radio"
        value={props.value}
        name="default-radio"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        checked={props.checked}
        onChange={props.onChange}
      />
      <label
        for="default-radio-1"
        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {props.value}
      </label>
    </div>
  );
}
