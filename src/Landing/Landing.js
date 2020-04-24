import React, { Component } from 'react';
import { Grommet, Grid, Box, Heading, Button as GButton, Text } from 'grommet';
import { Sidebar } from 'primereact/sidebar';
import { ipsumShort } from './../Models/Lorem';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './Landing.css';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  componentDidMount() {}

  handleSidebar = () => {
    this.setState((state) => {
      return { visible: !state.visible };
    });
  };

  handleClick = () => {
    this.props.history.push(`/registro`);
  };
  title = 'Excepteur sint oeeaeeat cupidatat non proider';
  render() {
    return (
      <Grommet className='App' style={{ overflow: 'hidden' }}>
        <Sidebar
          visible={this.state.visible}
          onHide={(e) => this.setState({ visible: false })}
        >
          Movil App
        </Sidebar>
        <header className='App-header'>
          <Grid
            rows={['xsmall', 'medium', 'auto', 'auto', 'auto']}
            columns={['1rf']}
            gap='medium'
            areas={[['header'], ['Title'], ['main'], ['Hero'], ['footer']]}
          >
            <Header handleSidebar={this.handleSidebar} />
            <TitleContent />
            <MainContent handleClick={this.handleClick} />
            <HeroContent />
            <FooterContent />
          </Grid>
        </header>
      </Grommet>
    );
  }
}

const Header = ({ handleSidebar }) => {
  return (
    <Box gridArea='header' direction='row' align='baseline'>
      <Button
        icon='pi pi-align-left'
        onClick={handleSidebar}
        className='mTitle topButton'
      />
      <Heading margin={{ left: '15px' }} level='1'>
        Sumamos
      </Heading>
    </Box>
  );
};
const TitleContent = () => (
  <Grid
    gridArea='Title'
    rows={['1fr', '1fr']}
    columns={['1fr']}
    gap={{ column: 'small', row: 'small' }}
    areas={[['title'], ['logo']]}
  >
    <Box
      gridArea='logo'
      background='status-warning'
      width='small'
      fill='horizontal'
      justify='around'
    >
      imagen
    </Box>
    <Box gridArea='title' margin={{horizontal:'medium'}} justify='center' align='end'>
      <Heading color='white' level='4' textAlign='end'>
        Apoyos por contingencia covid-19
      </Heading>
      <Heading textAlign='end' level='2'>
        No es necesario exponerse, solicita, verifica y recibe tu apoyo hasta la
        puerta de tu casa
      </Heading>
    </Box>
  </Grid>
);
const MainContent = ({ handleClick }) => {
  return (
    <Grid
      gridArea='main'
      rows={['xsmall', 'auto', 'auto']}
      columns={['1fr']}
      gap={{ column: 'small', row: 'small' }}
      areas={[['title'], ['cards'], ['footer']]}
    >
      <Box gridArea='title' direction='row' justify='center'>
        <Heading level='2' responsive>
          SELECCIONA EL APOYO QUE CREES QUE PUEDAS NECESITAR
        </Heading>
      </Box>
      <Grid
        gridArea='cards'
        margin='medium'
        justify='center'
        gap={{ column: 'small', row: 'medium' }}
        columns={{
          count: 'fill',
          size: '300px',
        }}
      >
        {Apoyos.map((el, i) => (
          <_Card title={el.title} description={el.description} key={i} handleClick={handleClick} />
        ))}
      </Grid>
    </Grid>
  );
};
const HeroContent = () => {
  return (
    <Grid
      gridArea='Hero'
      rows={['auto']}
      columns={['1fr']}
      gap={{ column: 'small', row: 'small' }}
      areas={[['hero']]}
    >
      <Box gridArea='hero' className='unselect' fill='horizontal'>
        <Heading
          className='unselect'
          // textAlign='center'
          // alignSelf='start'
          margin={{
            horizontal: 'medium',
            vertical: 'medium',
          }}
        >
          Maximiza el alcance de tu cooperación.
        </Heading>
        <Heading
          textAlign='start'
          alignSelf='start'
          className='unselect'
          responsive
          level='4'
          margin={{
            horizontal: 'medium',
          }}
        >
          <Text size='small'>
            La herramienta ideal para gestionar la logística de tus campañas de
            apoyos sociales.
            <br />
            <br />
            Recibe, gestiona y distribuye tus apoyos sociales económicos o en
            especie con la metodología de sumamos.
            <br />
            <br />
            Eficienta la operación y maximiza tus recursos humanos.
            <br />
            <br />
            Ahorra recursos técnicos y agiliza los procesos internos.
            <br />
            <br />
            Toma mejores decisiones.
          </Text>
        </Heading>
      </Box>
    </Grid>
  );
};
const FooterContent = () => {
  return (
    <Grid
      gridArea='footer'
      rows={['auto', 'auto']}
      columns={['1fr']}
      gap={{ column: 'small', row: 'small' }}
      areas={[['.'], ['links'], ['copy']]}
    >
      <Grid
        gridArea='links'
        margin='medium'
        gap={{ column: 'small', row: 'medium' }}
        columns={{
          count: 'fit',
          size: '200px',
        }}
      >
        <Box justify='start'>
          <Text weight='bold' size='medium'>
            CONTACTANOS
          </Text>
          <Box>
            <Text size='small'>hola@paseusted.com.mx</Text>
            <Text size='small'>soporte@paseusted.com.mx</Text>
          </Box>
        </Box>
        <Box justify='start'>
          <Text weight='bold' size='medium'>
            SERVICIO AL CLIENTE
          </Text>
          <Box>
            <Text size='xsmall'>
              SUMEMOS cuenta con un equipo de atención a clientes listo para
              resolver las respuestas que necesitas en tiempo y forma.
            </Text>
          </Box>
        </Box>
        <Box justify='start'>
          <Text weight='bold' size='medium'>
            INFORMACIÓN
          </Text>
          <Box>
            <Text size='xsmall'>Política de privacidad</Text>
          </Box>
        </Box>
        <Box justify='start'>
          <Text weight='bold' size='medium'>
            SUBSCRIBETE A SUMEMOS VIA EMAIL
          </Text>
          <Box>
            <Text size='xsmall'>
              Recibe las últimas noticias acerca de la plataforma SUMEMOS
            </Text>
          </Box>
        </Box>
      </Grid>

      <Box
        gridArea='copy'
        direction='row'
        gap='medium'
        justify='between'
        margin='none'
      >
        <Text textAlign='center' weight='bold' size='small'>
          Made by Pase Usted
        </Text>
        <Text textAlign='center' weight='bold' size='small'>
          Sumamos © 2020 Copyright
        </Text>
      </Box>
    </Grid>
  );
};

const _Card = ({ title, description, status = true ,handleClick }) => {
  const footer = (
    <Button label='Seleccionar' className={'unselectbtn p-button-raised'} onClick={handleClick}/>
  );
  return (
    <Card
      title={title}
      footer={footer}
      className={status ? 'unselect' : 'selected'}
    >
      {description}
    </Card>
  );
};

const Apoyos = [
  {
    title: 'APOYO ALIMENTARIO POR EMERGENCIA SANITARIA',
    description:
      'Es un  programa gubernamental que tiene como finalidad brindar apoyo alimentario en esta contingencia sanitaria hasta la puerta de tu casa, porque TU BIENESTAR ES NUESTRA PRIORIDAD.Este programa tiene como objetivo primordial hacer llegar una despensa por familia, a aquellas personas que se encuentren en una situación vulnerable.El apoyo es GRATUITO y de acceso público.',
  },
  // {
  //   title: 'Apoyo a micro y pequeñas empresas',
  //   description:
  //     'Brindar apoyo económico a los trabajadores cuyos ingresos se han visto afectados debido a la contingencia.',
  // },
  // {
  //   title: 'Apoyo a productores de maíz',
  //   description:
  //     'Los y las productoras que se dedican a la producción de maíz que han sido afectados por la actual pandemia de COVID-19 tienen el apoyo del Gobierno del Estado.',
  // },
  // {
  //   title: 'Apoyo a personas con autoempleo o empleos no formales',
  //   description:
  //     'Brindar apoyo económico a los trabajadores cuyos ingresos se han visto afectados debido a la contingencia.',
  // },
  // {
  //   title: 'Apoyo a mujeres',
  //   description:
  //     'Las trabajadoras del hogar representan un sector económico vulnerable por lo cual también se otorgará un apoyo para amas de casa afectadas por la contingencia de COVID-19.',
  // },
];
