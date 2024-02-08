import { useState } from 'react'
import Cistern from '../../components/cistern/Cistern'
import MilkFormInput from '../../components/milkFormInput/MilkFormInput'
import PourInLog from '../../components/pourInLog/PourInLog'
import styles from './MilkSystem.module.scss'
import { useAddLog } from './hooks/useAddLog'

const MilkSystem = () => {
	const [logs, setLogs] = useState([])

	const [cisterns, setCisterns] = useState([
		{ id: 0, value: 0 },
		{ id: 1, value: 0 },
		{ id: 2, value: 0 },
		{ id: 3, value: 0 },
		{ id: 4, value: 0 }
	])

	const propsAddLog = useAddLog({
		cisterns,
		setCisterns,
		setLogs
	})

	return (
		<>
			<MilkFormInput {...propsAddLog} />

			<section className={styles.wrapperCisterns}>
				{cisterns.map(cistern => (
					<Cistern value={cistern.value} key={cistern.id} />
				))}
			</section>
			{logs.length > 0 && <PourInLog logs={logs} />}
		</>
	)
}

export default MilkSystem
